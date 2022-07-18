import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Instructions, Leaderboard, Match } from './pages/';
import { OngoingMatch, Lobby } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './reducers/userReducer';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username);

  dispatch(userActions.setUsername('Edgar'));
  return (
    <>
      <Header />
      <h1>{username}</h1>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="rules" element={<Instructions />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
