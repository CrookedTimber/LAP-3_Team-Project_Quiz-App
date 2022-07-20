import { useEffect, useState } from 'react';
import { Lobby, OngoingMatch, MatchResults } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client'
import { matchActions } from '../../reducers';

export default function Match() {
  const [roomNum, setRoomNum] = useState(null);

  const dispatch = useDispatch();

  const players = useSelector((state) => state.match.players);
  const username = useSelector((state) => state.user.username);
  const isHost = useSelector((state) => state.user.host);
  const requestedRoom = useSelector((state) => state.user.requestedRoom);
  const gameStarted = useSelector((state) => state.match.gameStart);
  const showResults = useSelector((state) => state.match.showResults);
  
  // establish connection to socket port
  let socket = io.connect("http://localhost:3001");
  let socketID;

  //detect changes in socket i.e. broadcasts/emitions
  useEffect(() => {
    
    socket.on('connect', () => {
      socketID = socket.id;

      //Host / Join game
      if(isHost){ //create room if host
        if(roomNum === null){
          setRoomNum(Math.floor(1000 + Math.random() * 9000));
        } 
        socket.emit('join_room', roomNum);
      }else if(!isHost){
        setRoomNum(parseInt(requestedRoom));
        socket.emit('join_room', roomNum);
      }

      console.log({username: username, isHost: isHost, room: roomNum});
    });

    //Test message recieve
    socket.on('recieve_message', (data) => {
      console.log('recieved from:', data);
    })

    if(!isHost){
      //host start game
      socket.on('recieve_host_start', (data) => {
        if(data.hostStart){
          console.log('host starting match');
          dispatch(matchActions.updateQuestionsArray(data.questions));
          dispatch(matchActions.updateGameStart());
        }
      })

      //recieve question

      //recieve answers

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
      {!gameStarted && <Lobby roomNum={roomNum} isHost={isHost} socket={socket}/>}
      {gameStarted && !showResults && <OngoingMatch />}
      {gameStarted && showResults &&  <MatchResults />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}
