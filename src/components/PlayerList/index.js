import React from "react";
import { matchActions, userActions } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';

import './PlayerList.css'


function PlayerList({testPayload}){
    let players = useSelector((state) => state.match.playersInGame);
    if(testPayload !== null && testPayload !== undefined){
        players = testPayload;
    }
    
    let playerList = [];

    async function createList() {
        for (let i = 0; i < players.length; i++) {
          playerList.push(
            <>
            <div className="players-lobby-container">
              <li className="player-list" role="player-list-item" key={i}>
                {players[i]}
                <div className={`lobby-avatar player${i}`}></div>
              </li>
            </div>
            </>
          );
    
        }
      }

    createList()
    return playerList;
}

export default PlayerList;
