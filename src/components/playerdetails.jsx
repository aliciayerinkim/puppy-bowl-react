import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSinglePlayer } from './api';

function PlayerDetails() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      const fetchedPlayer = await fetchSinglePlayer(id);
      setPlayer(fetchedPlayer);
    };
    getPlayer();
  }, [id]);

  return (
    <div className='playerDetail'>
      {player ? (
        <>
          <h2>{player.name}</h2>
          <img src={player.imageUrl} alt={player.name} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <div>Breed: {player.breed}</div>
          <div>Status: {player.status}</div>
          <Link to="/">
            <button>Back to List</button>
          </Link>        </>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default PlayerDetails;
