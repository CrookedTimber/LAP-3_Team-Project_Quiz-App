import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components';
import { Dashboard, Home, Instructions, Leaderboard, Lobby, LocalGame, Match, NotFound } from './pages/';


import './App.css';

function App() {
  
  return (
    <>
    <div className="App parallax">
      
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route path="/">
              <Route path="/" element={<Home />}></Route>
                <Route path=":dashboard" element={<Dashboard />}></Route>
                <Route path=":localgame" element={<LocalGame />}></Route>
                <Route path=":lobby" element={<Lobby />}></Route>
                <Route path=":joingame" element={<Match />}></Route>               
              </Route>
            <Route path="rules" element={<Instructions />}></Route>
            <Route path="leaderboard" element={<Leaderboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      
    </div>
    </>
 
  );
}

export default App;
