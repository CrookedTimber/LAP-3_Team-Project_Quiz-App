import { useEffect, useState } from 'react';
import { Lobby, OngoingMatch, MatchResults } from '../../components';
import { useSelector } from 'react-redux';
import io from 'socket.io-client'
// import Player from '../../Player';
// import { userActions } from '../../reducers';

export default function Match() {
  const [roomNum, setRoomNum] = useState(null);

  // const players = useSelector((state) => state.match.players);
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

      if(isHost){ //create room if host
        if(roomNum === null){
          setRoomNum(Math.floor(1000 + Math.random() * 9000));
        } 
        socket.emit('join_room', roomNum);
      }else if(!isHost){
        setRoomNum(parseInt(requestedRoom));
        socket.emit('join_room', roomNum);
      }

      console.log({username: username, id: socketID, isHost: isHost, room: roomNum});
    });

    socket.on('recieve_message', (data) => {
      console.log('message recieved: ', data);
    })


  }, [socket])


   /* TEST FUNCTION */
   function testFunc(){
    socket.emit('send_message', {message: 'test', room: roomNum});
  }

  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby roomNum={roomNum} isHost={isHost}/>}
      {gameStarted && !showResults && <OngoingMatch />}
      {gameStarted && showResults &&  <MatchResults />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}
