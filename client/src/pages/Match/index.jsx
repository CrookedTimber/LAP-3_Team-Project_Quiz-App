import { useEffect, useState } from 'react';
import { Lobby, OngoingMatch } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client'
import { userActions } from '../../reducers';

export default function Match() {
  const [roomNum, setRoomNum] = useState(null);

  const username = useSelector((state) => state.user.username);
  const isHost = useSelector((state) => state.user.host);
  const requestedRoom = useSelector((state) => state.user.requestedRoom);
  const gameStarted = useSelector((state) => state.match.gameStart);
  
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
        socket.emit('join_room', 5583);
      }else if(!isHost){
        setRoomNum(requestedRoom);
        socket.emit('join_room', 5583);
      }

      console.log({username: username, id: socketID, isHost: isHost, room: 5583});
    });

    socket.on('recieve_message', (data) => {
      console.log('message recieved: ', data);
    })


  }, [socket])


   /* TEST FUNCTION */
   function testFunc(){
    socket.emit('send_message', {message: 'test', room: 5583});
  }

  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby roomNum={5583}/>}
      {gameStarted && <OngoingMatch />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}
