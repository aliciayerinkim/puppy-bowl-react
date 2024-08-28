import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player, onRemove }) => (
  <div className="playerCard">
    <h2>{player.name}</h2>
    <img src={player.imageUrl} alt={player.name} style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}/>
    <p>ID: {player.id}</p>
    <Link to={`/player/${player.id}`}>
        <button>See details</button>
    </Link>
    <button onClick={() => onRemove(player.id)}>Remove from roster</button>
  </div>
);

export default PlayerCard;
