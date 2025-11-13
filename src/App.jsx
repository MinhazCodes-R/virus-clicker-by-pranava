import React, { useState, useEffect } from 'react';
import './App.css';
import Virus from './components/Virus';
import Stats from './components/Stats';
import Upgrades from './components/Upgrades';

function App() {
  // Game state
  const [viruses, setViruses] = useState(0);
  const [virusesPerSecond, setVirusesPerSecond] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  
  // Upgrades state - themed around immune system and medical science
  const [upgrades, setUpgrades] = useState({
    whiteBloodCells: { count: 0, cost: 10, production: 0.1, name: "White Blood Cell", description: "Produces 0.1 viruses/sec" },
    antibodies: { count: 0, cost: 50, production: 0.5, name: "Antibody", description: "Produces 0.5 viruses/sec" },
    tCells: { count: 0, cost: 200, production: 2, name: "T-Cell", description: "Produces 2 viruses/sec" },
    vaccines: { count: 0, cost: 1000, production: 10, name: "Vaccine Lab", description: "Produces 10 viruses/sec" },
    researchLab: { count: 0, cost: 5000, production: 50, name: "Research Lab", description: "Produces 50 viruses/sec" },
    hospital: { count: 0, cost: 20000, production: 200, name: "Hospital", description: "Produces 200 viruses/sec" }
  });

  // Click power upgrades
  const [clickUpgrades, setClickUpgrades] = useState({
    microscope: { owned: false, cost: 100, power: 1, name: "Microscope", description: "+1 virus per click" },
    petriDish: { owned: false, cost: 500, power: 5, name: "Petri Dish", description: "+5 viruses per click" },
    centrifuge: { owned: false, cost: 2500, power: 10, name: "Centrifuge", description: "+10 viruses per click" },
    electronMicroscope: { owned: false, cost: 10000, power: 25, name: "Electron Microscope", description: "+25 viruses per click" }
  });

  // Handle virus click
  const handleVirusClick = () => {
    setViruses(prev => prev + clickPower);
  };

  // Buy upgrade (production)
  const buyUpgrade = (upgradeName) => {
    const upgrade = upgrades[upgradeName];
    if (viruses >= upgrade.cost) {
      setViruses(prev => prev - upgrade.cost);
      setUpgrades(prev => ({
        ...prev,
        [upgradeName]: {
          ...prev[upgradeName],
          count: prev[upgradeName].count + 1,
          cost: Math.floor(prev[upgradeName].cost * 1.15) // Cost increases by 15%
        }
      }));
    }
  };

  // Buy click upgrade
  const buyClickUpgrade = (upgradeName) => {
    const upgrade = clickUpgrades[upgradeName];
    if (!upgrade.owned && viruses >= upgrade.cost) {
      setViruses(prev => prev - upgrade.cost);
      setClickPower(prev => prev + upgrade.power);
      setClickUpgrades(prev => ({
        ...prev,
        [upgradeName]: { ...prev[upgradeName], owned: true }
      }));
    }
  };

  // Calculate viruses per second
  useEffect(() => {
    let total = 0;
    Object.values(upgrades).forEach(upgrade => {
      total += upgrade.count * upgrade.production;
    });
    setVirusesPerSecond(total);
  }, [upgrades]);

  // Auto-generate viruses
  useEffect(() => {
    const interval = setInterval(() => {
      if (virusesPerSecond > 0) {
        setViruses(prev => prev + virusesPerSecond / 10); // Update 10 times per second for smoothness
      }
    }, 100);
    return () => clearInterval(interval);
  }, [virusesPerSecond]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🦠 Virus Lab Clicker 🦠</h1>
        <p className="subtitle">Study viruses and strengthen the immune system!</p>
      </header>
      
      <div className="game-container">
        <div className="main-section">
          <Virus onClick={handleVirusClick} />
          <Stats 
            viruses={Math.floor(viruses)} 
            virusesPerSecond={virusesPerSecond.toFixed(1)} 
            clickPower={clickPower}
          />
        </div>
        
        <div className="upgrades-section">
          <Upgrades 
            upgrades={upgrades}
            clickUpgrades={clickUpgrades}
            viruses={viruses}
            onBuyUpgrade={buyUpgrade}
            onBuyClickUpgrade={buyClickUpgrade}
          />
        </div>
      </div>
      
      <footer className="info-section">
        <p>💡 Learn: Click to collect virus samples and unlock immune system components!</p>
      </footer>
    </div>
  );
}

export default App;
