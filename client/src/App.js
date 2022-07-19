import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Instructions, Leaderboard, Match } from './pages/';
import { OngoingMatch, Lobby, API, MatchLogic } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, matchActions } from './reducers/userReducer';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="rules" element={<Instructions />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
