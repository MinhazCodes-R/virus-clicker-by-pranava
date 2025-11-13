import React from 'react';

function Upgrades({ upgrades, clickUpgrades, viruses, onBuyUpgrade, onBuyClickUpgrade }) {
  return (
    <div className="upgrades-container">
      <h2>🔬 Research Upgrades</h2>
      <p className="upgrades-description">Enhance your clicking power with lab equipment!</p>
      
      <div className="upgrade-list">
        {Object.entries(clickUpgrades).map(([key, upgrade]) => (
          <div 
            key={key} 
            className={`upgrade-item ${upgrade.owned ? 'owned' : viruses >= upgrade.cost ? 'affordable' : 'expensive'}`}
            onClick={() => !upgrade.owned && onBuyClickUpgrade(key)}
          >
            <div className="upgrade-header">
              <span className="upgrade-name">{upgrade.name}</span>
              {upgrade.owned && <span className="owned-badge">✓ OWNED</span>}
            </div>
            <div className="upgrade-description">{upgrade.description}</div>
            {!upgrade.owned && (
              <div className="upgrade-cost">
                <span className="cost-label">Cost:</span>
                <span className="cost-value">{upgrade.cost} 🦠</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>🛡️ Immune System Upgrades</h2>
      <p className="upgrades-description">Build your immune defenses to collect viruses automatically!</p>
      
      <div className="upgrade-list">
        {Object.entries(upgrades).map(([key, upgrade]) => (
          <div 
            key={key} 
            className={`upgrade-item ${viruses >= upgrade.cost ? 'affordable' : 'expensive'}`}
            onClick={() => onBuyUpgrade(key)}
          >
            <div className="upgrade-header">
              <span className="upgrade-name">{upgrade.name}</span>
              <span className="upgrade-count">({upgrade.count})</span>
            </div>
            <div className="upgrade-description">{upgrade.description}</div>
            <div className="upgrade-cost">
              <span className="cost-label">Cost:</span>
              <span className="cost-value">{upgrade.cost} 🦠</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upgrades;
