import React from 'react';
import { removePlayer } from './api';
import PlayerCard from './playercard';


const PlayerList = ({ players, onRefresh }) => {

  const handleRemove = async (playerId) => {
    await removePlayer(playerId);
    onRefresh(); 
  };

  return (
    <div className="main">
      {players.length === 0 ? <p>No players available.</p> : (
        players.map(player => (
          <PlayerCard key={player.id} player={player} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
}

export default PlayerList;
