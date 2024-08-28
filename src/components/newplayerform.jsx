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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Player Name"
                required
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
            />
            <input
                type="text"
                name="breed"
                placeholder="Breed"
                required
                value={playerBreed}
                onChange={e => setPlayerBreed(e.target.value)}
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={playerImageUrl}
                onChange={e => setPlayerImageUrl(e.target.value)}
            />
            <button type="submit" style={{backgroundColor: 'brown'}}>Add Player</button>
        </form>
    );
};

export default NewPlayerForm;
