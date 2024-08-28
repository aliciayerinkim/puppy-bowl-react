import React, { useEffect, useState } from 'react';
import PlayerList from './components/playerlist';
import NewPlayerForm from './components/newplayerform';
import { fetchAllPlayers } from './components/api';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const loadedPlayers = await fetchAllPlayers();
    setPlayers(loadedPlayers);
  };

  return (
    <div className="App">
      <h1>Puppy Bowl Roster</h1>
      <NewPlayerForm onPlayerAdded={loadPlayers} />
      <PlayerList players={players} onRefresh={loadPlayers} />
    </div>
  );
}

export default App;