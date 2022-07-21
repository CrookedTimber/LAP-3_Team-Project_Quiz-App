import React from "react";
import { matchActions, userActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';

function PlayerList(){
    const players = useSelector((state) => state.match.playersInGame);
    let playerList = [];

    async function createList(){

        for (let i = 0; i < players.length; i++) {
            playerList.push(<li key={i}>{players[i]}</li>)
        }
    }

    createList()
    return playerList;
}

export default PlayerList;