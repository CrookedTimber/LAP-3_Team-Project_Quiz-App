import Lobby from '../../components/Lobby';
import { OngoingMatch } from "../../components";
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import io from 'socket.io-client'
import Player from '../../Player';
import { matchActions } from '../../reducers';

export default function Match() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.id);
  const isHost = useSelector((state) => state.user.host);
  const gameStarted = useSelector((state) => state.match.gameStart);
  
  // establish connection to socket port
  let socket = io.connect("http://localhost:3001");
  let socketID;
  let roomNum = 4444;

  //detect changes in socket i.e. broadcasts/emitions
  useEffect(() => {
    
    socket.on('connect', () => {
      socketID = socket.id;
      
      if(isHost){ //create room if host
        socket.emit('join_room', roomNum);
        console.log('room created: ', roomNum);
      }else{
        socket.emit('join_room', roomNum);
        console.log('room joined: ', roomNum);
      }

      console.log({username: username, id: socketID, isHost: isHost});
    });

    socket.on('recieve_message', (data) => {
      alert(data.message);
    })


  }, [socket])


   /* TEST FUNCTION */
   function testFunc(){
    socket.emit('send_message', {message: 'test', socketID: socketID, room: roomNum});
  }

  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby roomNum={roomNum}/>}
      {gameStarted && <OngoingMatch />}
      <button onClick={testFunc}>Test</button>
    </>
  );
}
