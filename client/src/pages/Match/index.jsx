import { Lobby, OngoingMatch } from '../../components';
import { useSelector } from 'react-redux';


export default function Match() {

  const gameStarted = useSelector((state) => state.match.gameStart);

  return (
    <>
      <h3>Here goes the username</h3>
      {!gameStarted && <Lobby />}
      {gameStarted && <OngoingMatch />}
    </>
  );
}
