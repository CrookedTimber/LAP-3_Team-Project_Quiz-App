import { useEffect, useState, useRef } from 'react';
import { Lobby, OngoingMatch, MatchResults, PlayerList } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';
import { io } from 'socket.io-client';
import { socket } from './Socket';

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
  
  useEffect(() => {
    let roomNumber;

    //if host create room
    if(isHost && roomNum === null){
      roomNumber = Math.floor(1000 + Math.random() * 9000);
      setRoomNum(roomNumber);
      dispatch(matchActions.addPlayer(username));

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
      socket.on('recieve_player_data', async (data) => {
        dispatch(matchActions.addPlayer(data.username));
        socket.emit('update_player_list', {room: roomNumber, players: players});
      })
    }
    
    //recieve updated player list from host - Not display for users other than host reliably
    // if(!isHost){
    //   socket.on('recieve_updated_player_list', (data) => {
    //     console.log(data);
    //   })
    // }

    //recieve players choice
    socket.on('recieve_player_choices', (data) => {
      
    })


  }, [socket]);


  /* --- Host --- */

  //host start game
  function hostStartGame(){
    socket.emit('host_start_game', {});
  }

  /* --- ALL Users --- */

  /* TEST FUNCTION */
  function testFunc(){
    socket.emit('send_message', {message: username, room: roomNum});
    console.log(players);
  }

  return (
    <>
      <h3>{`Username: ${username}`}</h3>

      {!gameStarted && <Lobby roomNum={roomNum} roomHost={roomHost} isHost={isHost} socket={socket}/>}

      <section>
        <h3>Players in lobby: </h3>
        <ul>
          <PlayerList playersInLobby={players}/>
        </ul>
      </section>

      {gameStarted && !showResults && <OngoingMatch socket={socket} roomNum={roomNum}/>}
      {gameStarted && showResults &&  <MatchResults />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}
