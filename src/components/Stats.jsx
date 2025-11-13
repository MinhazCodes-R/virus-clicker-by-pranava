import React from 'react';

function Stats({ viruses, virusesPerSecond, clickPower }) {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <span className="stat-label">🦠 Virus Samples:</span>
        <span className="stat-value">{viruses}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">⚡ Per Second:</span>
        <span className="stat-value">{virusesPerSecond}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">👆 Click Power:</span>
        <span className="stat-value">{clickPower}</span>
      </div>
    </div>
  );
}

export default Stats;
