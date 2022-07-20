import { useEffect, useState, useRef } from 'react';
import { Lobby, OngoingMatch, MatchResults } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';
import { io } from 'socket.io-client';

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
  
  // establish connection to socket port
  let socket = io.connect("http://localhost:3001"); 

  //detect changes in socket i.e. broadcasts/emitions
  useEffect(() => {
    
    //establish connection upon load
    socket.on('connect', async() => {

      if(isHost){ //create room if host
        if(roomNum === null){
          setRoomNum(Math.floor(1000 + Math.random() * 9000));
        }
        
        if(isHost && roomHost === null){
          setroomHost(username);
        }

        await socket.emit('create_room', {room: roomNum, username: username, isHost: isHost});

      }else if(!isHost){
        setRoomNum(parseInt(requestedRoom));
        await socket.emit('join_room', {room: roomNum, username: username, isHost: isHost});
      }

      console.log('Player Connected: ', username, socket.id);
    });

    //Test message recieve
    socket.on('recieve_message', (data) => {
      console.log('recieved from:', data);
    })

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
          console.log('host starting match', players);
          dispatch(matchActions.updateQuestionsArray(data.questions));
          dispatch(matchActions.updateGameStart());
        }
      })
    }
    
    //recieve player answer choices

  }, [socket])

  /* --- Host --- */

  //host start game
  function hostStartGame(){
    socket.emit('host_start_game', {});
  }

  //relay question
  function hostRelayQuestion(){
    socket.emit('host_relay_question', {});
  }

  //relay answers
  function hostRelayAnswers(){
    socket.emit('host_relay_answers', {});
  }

  /* --- ALL Users --- */



  /* TEST FUNCTION */
  function testFunc(){
    socket.emit('send_message', {message: username, room: roomNum});
  }


  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby roomNum={roomNum} roomHost={roomHost} isHost={isHost} socket={socket}/>}
      {gameStarted && !showResults && <OngoingMatch socket={socket} roomNum={roomNum}/>}
      {gameStarted && showResults &&  <MatchResults />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}