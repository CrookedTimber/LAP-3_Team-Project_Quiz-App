import { useEffect, useState } from 'react';
import { Lobby, OngoingMatch, MatchResults, PlayerList } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';
import { socket } from './Socket';
import { Container } from 'react-bootstrap';

import "./Match.css";

export default function Match() {
  const [roomNum, setRoomNum] = useState(null);
  const [roomHost, setroomHost] = useState(null);

  const dispatch = useDispatch();

  const players = useSelector((state) => state.match.playersInGame);
  const username = useSelector((state) => state.user.username);
  const isHost = useSelector((state) => state.user.host);
  const requestedRoom = useSelector((state) => state.user.requestedRoom);
  const gameStarted = useSelector((state) => state.match.gameStart);
  const showResults = useSelector((state) => state.match.showResults);
  const score =  useSelector((state) => state.user.currentScore);
  const matchEnds = useSelector((state) => state.match.matchEnds);
  const roomFromMatchSlice = useSelector((state) => state.match.roomNum);
  
  useEffect(() => {
    let roomNumber;
    let tokenID;
    let playerArr = [];

    //if host create room
    if(isHost && roomNum === null){
      roomNumber = Math.floor(1000 + Math.random() * 9000);
      setRoomNum(roomNumber);
      dispatch(matchActions.setRoomNum(roomNumber))
      dispatch(matchActions.addPlayer(username));
      playerArr.push(username)
      dispatch(userActions.setIndex(0));
      //assign host name
      if(isHost && roomHost === null){
        setroomHost(username);
      };

      //create random room
      socket.emit('create_room', {room: roomNumber, username: username});

      // users join requested room
    }else if(!isHost && roomNum === null){
      roomNumber = parseInt(requestedRoom);
      setRoomNum(roomNumber);
      dispatch(matchActions.setRoomNum(roomNumber))

      socket.emit('join_room', {room: roomNumber, username: username, id: socket.id});
    };
    
    // Test message recieve
    socket.on('recieve_message', (data) => {
      console.log('recieved from:', data);
    });

    //get name of host
    socket.on('recieve_host_name', (data) => {
      if(roomHost === null){
        setroomHost(data);
      }
    })

    //host start game
    if(!isHost){
      socket.on('recieve_host_start', (data) => {
        if(data.hostStart){
          dispatch(matchActions.updateQuestionsArray(data.questions));
          dispatch(matchActions.updateGameStart());
        }
      })
    }

    // recieve players for list
    if(isHost){
      socket.on('recieve_player_data', (data) => {
        if(!playerArr.includes(data.username)){
          playerArr.push(data.username);
          dispatch(matchActions.addPlayer(data.username));
        }
        socket.emit('update_player_list', {room: roomNumber, players: playerArr});
      })
    }
    
    //recieve players choice
    socket.on('recieve_player_choices', (data) => {
      dispatch(matchActions.addToRoundAnswers({index: data.choice, value: data.token}));
    })
    
    //recieve token index number
    socket.on('recieve_token_index', (data) => {
      tokenID = data.indexOf(username)
      dispatch(userActions.setIndex(tokenID));
      console.log('token index: ', tokenID);
    })
    
   //recieve updated player list from host
    if(!isHost){
      socket.on('recieve_updated_player_list', (data) => {
        dispatch(matchActions.updatePlayers(data));
      })
    }

    // socket.on('recieve_final_results', (data) => {
    //   if(!results.includes(data.username)){
    //     dispatch(matchActions.addToResults({username: data.username, score: data.score}));
    //   }
    // })

    //emit final results
    // if(showResults){
    //   results.forEach(element => {
    //     if(!element.username === username){
    //       dispatch(matchActions).addToResults({username: username, score: score});
    //     }
    //   });
      
    //   socket.emit('emit_final_result', {username: username, score: score, room: roomNum});
    // }

    // Receives other player scores and pushes them into match.results
    socket.on('receive_player_score', (data) => {
      dispatch(matchActions.addToResults(data))
  })

  }, [socket]);

  // On last question timeout
  useEffect(() => {

    // Adds player scores to their own results array
    matchEnds && dispatch(matchActions.addToResults({'username': username, score: score}))

    // Sends player scores to the server, in turn, the server sends the scores to the other players
    matchEnds && socket.emit('send_player_score', {room: roomFromMatchSlice, username: username, score :score});

  }, [matchEnds])
  // matchEnds is a new boolean on the matchSlice. It tracks the timeout of the last question, which comes before the triggering of show results that becomes true after the after the answer to the last question is revealed. Apart from the activation on timer, matchEnds also becomes true when you press the Next Question development button


  /* --- Host --- */

  //host start game
  function hostStartGame(){
    socket.emit('host_start_game', {});
  }



  /* TEST FUNCTION */
  function testFunc(){
    socket.emit('send_message', {message: username, room: roomNum});

    const test = {username: 'test', choice: 'answer0'};
  }

  return (
    <>
    <Container className="match-container">
      <h3 className="username-header">{`Username: ${username}`}</h3>

      {!gameStarted && <Lobby roomNum={roomNum} roomHost={roomHost} isHost={isHost} socket={socket} players={players}/>}

      {!gameStarted && 
        <section className="players-container">
          <h3>Players in lobby: </h3>
          <ul>
            <PlayerList playersInLobby={players}/>
          </ul>
        </section>
      }

      {gameStarted && !showResults && <OngoingMatch socket={socket} roomNum={roomNum}/>}
      {gameStarted && showResults &&  <MatchResults />}
      <button onClick={testFunc}>Test</button>
      </Container>
    </>
  );
}
