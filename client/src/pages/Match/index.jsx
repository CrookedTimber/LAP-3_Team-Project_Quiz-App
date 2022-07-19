import { Lobby, OngoingMatch } from '../../components';
import { useSelector } from 'react-redux';

export default function Match() {
  const username = useSelector((state) => state.user.username);
  const gameStarted = useSelector((state) => state.match.gameStart);

  const socket = io.connect("http://localhost:3001");

  useEffect(() => {
    if(username){
      socket.on('connect', () => {
        const connectedPlayer = new Player(socket.id, username);
        console.log(connectedPlayer);
      });
    }

    // socket.on('recieve_message', (data) => {
    //   alert(data.message);
    // });

  }, [socket])


  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby />}
      {gameStarted && <OngoingMatch />}
    </>
  );
}
