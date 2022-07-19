import Lobby from '../Lobby';
import { OngoingMatch } from "../../components";
import { useSelector } from 'react-redux';

export default function Match() {
  const username = useSelector((state) => state.user.username);
  const gameStarted = useSelector((state) => state.match.gameStart);

  return (
    <>
      <h3>{`Username: ${username}`}</h3>
      {!gameStarted && <Lobby />}
      {gameStarted && <OngoingMatch />}
    </>
  );
}
