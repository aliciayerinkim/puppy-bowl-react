import React, { useEffect, useState } from 'react';
import PlayerList from './components/playerlist';
import NewPlayerForm from './components/newplayerform';
import { fetchAllPlayers } from './components/api';

function App() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPlayers();
  }, []);

  useEffect(() => {
    filterPlayers();
  }, [searchTerm, players]);

  const loadPlayers = async () => {
    const loadedPlayers = await fetchAllPlayers();
    setPlayers(loadedPlayers);
  };

  const filterPlayers = () => {
    const filtered = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', width: '100%' }}>Puppy Bowl Roster</h1>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h2>Search Puppy</h2>
        <input
          type="text"
          placeholder="Search Players"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '300px'
          }}
        />
      </div>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h2>Add Puppy</h2>
        <NewPlayerForm onPlayerAdded={loadPlayers} />
      </div>
      <PlayerList players={filteredPlayers} onRefresh={loadPlayers} />
    </div>
  );
}

export default App;
