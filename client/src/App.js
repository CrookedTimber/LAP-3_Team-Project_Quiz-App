import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Instructions, Leaderboard, Match, Error } from './pages/';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="rules" element={<Instructions />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
        <Route path="match" element={<Match />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
