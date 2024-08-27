const cohortName = "2407-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      const { data } = await response.json();
      return data.players;
    } catch (err) {
      console.error("Uh oh, trouble fetching players!", err);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const { data } = await response.json();
        return data.player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(playerObj),
        });
    } catch (err) {
        console.error("Oops, something went wrong with adding that player!", err);
    }
};

export const removePlayer = async (playerId) => {
    try {
        await fetch(`${API_URL}/players/${playerId}`, { 
            method: "DELETE", 
        });
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};