import { Routes, Route, Outlet } from 'react-router-dom';
import { PageWrapper } from './components';
import { Home, Instructions, Leaderboard, Lobby, LocalGame, Match, NotFound } from './pages/';


import './App.css';


function App() {
  
  return (
    <>
    <div className="App parallax">
      
        <Routes>
          <Route path="/" element={<PageWrapper />}>
              <Route path="/">
                <Route path="/" element={<Home />}>                  
                  <Route path=":localgame" element={<LocalGame />} />
                  <Route path=":lobby" element={<Lobby />} /> 
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
