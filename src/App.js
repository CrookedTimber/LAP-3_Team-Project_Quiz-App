import { Routes, Route, Outlet } from 'react-router-dom';
import { Lobby, PageWrapper } from './components';
import { Home, Dashboard, Instructions, Leaderboard, LocalGame, Match, NotFound } from './pages/';

import './App.css';

function App() {
  
  return (
    <>
    <div className="App parallax">
      
        <Routes>
          <Route path="/" element={<PageWrapper />}>
              <Route path="/">
                <Route path="/" element={<Home />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path=":hostgame" element={<Lobby />}></Route>               
                  <Route path=":localgame" element={<LocalGame />} />
                  <Route path=":joingame" element={<Match />} /> 
                </Route>
              </Route>
            <Route path="rules" element={<Instructions />}></Route>
            <Route path="leaderboard" element={<Leaderboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
        <Outlet /> 
    </div>
    </>
 
  );
}

export default App;
