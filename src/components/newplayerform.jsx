import React, { useState } from 'react';
import { addNewPlayer } from './api';

const NewPlayerForm = ({ onPlayerAdded }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerBreed, setPlayerBreed] = useState('');
    const [playerImageUrl, setPlayerImageUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const playerObj = {
        name: playerName,
        breed: playerBreed,
        imageUrl: playerImageUrl
        };
        await addNewPlayer(playerObj);
        onPlayerAdded(); 
        setPlayerName('');
        setPlayerBreed('');
        setPlayerImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0'
        }}>
        <input
            type="text"
            name="name"
            placeholder="Player Name"
            required
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            style={inputStyle}
        />
        <input
            type="text"
            name="breed"
            placeholder="Breed"
            required
            value={playerBreed}
            onChange={e => setPlayerBreed(e.target.value)}
            style={inputStyle}
        />
        <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={playerImageUrl}
            onChange={e => setPlayerImageUrl(e.target.value)}
            style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Player</button>
        </form>
    );
};

const inputStyle = {
  padding: '10px',
  margin: '5px 0',
  border: '1px solid gray',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '300px'
};

const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  padding: '10px',
  marginTop: '5px'
};

export default NewPlayerForm;
