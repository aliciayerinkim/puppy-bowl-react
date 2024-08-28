import React from 'react';

const PlayerCard = ({ player, onDetails, onRemove }) => (
  <div style={{
    borderRadius: '8px',
    boxShadow: '0 4px 8px gray',
    padding: '15px',
    textAlign: 'center',
    width: '250px'
  }}>
    <h2>{player.name}</h2>
    <img src={player.imageUrl} alt={player.name} style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}/>
    <p>ID: {player.id}</p>
    <button style={{ backgroundColor: 'blue', color: 'white', margin: '5px' }} onClick={() => onDetails(player.id)}>See details</button>
    <button style={{ backgroundColor: 'blue', color: 'white', margin: '5px' }} onClick={() => onRemove(player.id)}>Remove from roster</button>
  </div>
);

export default PlayerCard;
