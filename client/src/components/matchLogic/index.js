// import react, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { matchActions } from "../../reducers";

function MatchLogic(){
    const dispatch = useDispatch();
    const gameStart = useSelector((state) => state.match.gameStart);
    const currentRoundNum = useSelector((state) => state.match.currentRoundNum);
    const roundStart = useSelector((state) => state.match.roundStart);
    const timeout = useSelector((state) => state.match.timeout);

    //each answer element has an id thats value is tied to the player upon clicking and stored as current vote
    let testVotes = [
        {userName: 'player1', id:0, currentVote: 2}, 
        {userName: 'player2', id:1, currentVote: 1}
    ];

    //check if the game is ready to play
    if(gameStart){
        // render match components
        //pass current round num to display and retrieve question and useEffect to check for changes in currentRoundNum 
        <questionComponent currentRound={currentRoundNum}/> 
        
        
        //display answers after 5 second delay
        const roundStartTimeout = setTimeout(() => {
            //round start = true
            dispatch(matchActions.declareRoundStart(true));

            //once round begins render answers and timer
            if(roundStart){
                <answersComponent currentRound={currentRoundNum}/> //pass current round num to display and retrieve answers
                
                //do not render timer when time out
                if(!timeout){
                    <timerComponent/> //upon timer expiring set timeout to true
                }else{
                    <answersComponent votes={testVotes}/> //display what people voted for

                    //prepare for next round after 5 seconds
                    setTimeout(newRound(), 5000);
                }
                
            }
            
        }, 5000);
        
        
        
        //prepare for next round
        function newRound(){
            let nextRoundNum = currentRoundNum + 1;
            dispatch(matchActions.declareRoundStart(false));
            dispatch(matchActions.setCurrentRound(nextRoundNum));

            // Hide answers and timer components

            //stop timeouts
            clearTimeout(roundStartTimeout);
            clearTimeout();
        }
      
    }else{
        
    }
}

export default MatchLogic;