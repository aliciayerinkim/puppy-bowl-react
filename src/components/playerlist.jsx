import React from 'react';
import { fetchSinglePlayer, removePlayer } from './api';
import PlayerCard from './playercard';

const PlayerList = ({ players, onRefresh }) => {
  const handleDetails = async (playerId) => {
    const player = await fetchSinglePlayer(playerId);
    alert(JSON.stringify(player));
  };

  const handleRemove = async (playerId) => {
    await removePlayer(playerId);
    onRefresh(); 
  };

  return (
    <main style={{
      display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'
    }}>
      {players.length === 0 ? <p>No players available.</p> : (
        players.map(player => (
          <PlayerCard key={player.id} player={player} onDetails={handleDetails} onRemove={handleRemove} />
        ))
      )}
    </main>
  );
}

export default PlayerList;
