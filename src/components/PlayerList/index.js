import React from "react";
import { matchActions, userActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';

function PlayerList({testPayload}){
    let players = useSelector((state) => state.match.playersInGame);
    if(testPayload !== null && testPayload !== undefined){
        players = testPayload;
    }
    
    let playerList = [];

    async function createList(){

        for (let i = 0; i < players.length; i++) {
            playerList.push(<li role="player-list-item" key={i}>{players[i]}</li>)
        }
    }

    createList()
    return playerList;
}

export default PlayerList;