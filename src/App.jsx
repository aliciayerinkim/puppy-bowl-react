import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerList from './components/playerlist';
import NewPlayerForm from './components/newplayerform';
import PlayerDetails from './components/playerdetails';
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
    <Router>
      <div style={{ textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Puppy Bowl Roster</h1>
              <h2>Search Puppy</h2>
              <input
                type="text"
                placeholder="Search Players"
                value={searchTerm}
                onChange={handleSearchChange}
              />            
              <h2>Add Puppy</h2>
              <NewPlayerForm onPlayerAdded={loadPlayers} />
              <PlayerList players={filteredPlayers} onRefresh={loadPlayers} />
            </>
          } />
          <Route path="/player/:id" element={<PlayerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
