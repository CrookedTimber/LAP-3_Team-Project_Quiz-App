import React from "react";

function PlayerList({playersInLobby}){
    let players = [];

    playersInLobby.forEach(player => {
        players.push(<li>{player}</li>)
    })

    return players;
}

export default PlayerList;