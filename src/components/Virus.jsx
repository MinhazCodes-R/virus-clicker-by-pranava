import React, { useState } from 'react';

function Virus({ onClick }) {
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleClick = (e) => {
    setIsClicking(true);
    onClick();
    
    // Create DNA particles with randomized positions
    const newParticles = [];
    const timestamp = Date.now();
    for (let i = 0; i < 8; i++) {
      // Random angle and distance for varied particle placement
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 40; // Random distance between 80-120px
      newParticles.push({
        id: timestamp + i,
        angle: angle,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      });
    }
    
    // Add new particles to existing ones
    setParticles(prev => [...prev, ...newParticles]);
    
    // Remove these specific particles after 1.5 seconds
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1500);
    
    setTimeout(() => setIsClicking(false), 200);
  };

  return (
    <div className="virus-container">
      <div className="virus-click-area">
        <div 
          className={`virus ${isClicking ? 'virus-clicked' : ''}`}
          onClick={handleClick}
        >
          <svg viewBox="0 0 200 200" width="200" height="200">
          {/* Virus core */}
          <circle cx="100" cy="100" r="50" fill="#8B5CF6" />
          
          {/* Virus spikes */}
          <circle cx="100" cy="40" r="8" fill="#A78BFA" />
          <circle cx="130" cy="50" r="8" fill="#A78BFA" />
          <circle cx="150" cy="70" r="8" fill="#A78BFA" />
          <circle cx="160" cy="100" r="8" fill="#A78BFA" />
          <circle cx="150" cy="130" r="8" fill="#A78BFA" />
          <circle cx="130" cy="150" r="8" fill="#A78BFA" />
          <circle cx="100" cy="160" r="8" fill="#A78BFA" />
          <circle cx="70" cy="150" r="8" fill="#A78BFA" />
          <circle cx="50" cy="130" r="8" fill="#A78BFA" />
          <circle cx="40" cy="100" r="8" fill="#A78BFA" />
          <circle cx="50" cy="70" r="8" fill="#A78BFA" />
          <circle cx="70" cy="50" r="8" fill="#A78BFA" />
          
          {/* RNA strands inside */}
          <path d="M 80 90 Q 90 85 100 90 T 120 90" stroke="#C4B5FD" strokeWidth="3" fill="none" />
          <path d="M 80 100 Q 90 95 100 100 T 120 100" stroke="#C4B5FD" strokeWidth="3" fill="none" />
          <path d="M 80 110 Q 90 105 100 110 T 120 110" stroke="#C4B5FD" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      {/* DNA Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="dna-particle"
          style={{
            '--x': `${particle.x}px`,
            '--y': `${particle.y}px`
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 8 Q 10 6 15 8 M 5 12 Q 10 14 15 12" stroke="#4ade80" strokeWidth="2" fill="none" />
            <circle cx="5" cy="8" r="2" fill="#4ade80" />
            <circle cx="15" cy="8" r="2" fill="#4ade80" />
            <circle cx="5" cy="12" r="2" fill="#60a5fa" />
            <circle cx="15" cy="12" r="2" fill="#60a5fa" />
          </svg>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Virus;
