import { Routes, Route, Outlet } from 'react-router-dom';
import { PageWrapper } from './components';
import { Home, Instructions, Leaderboard, LocalGame, Match, NotFound } from './pages';


import './App.css';


function App() {
  
  return (
    <>
    <div className="App parallax">
      
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route path="/" element={<Home />} />                
            <Route path="localgame" element={<LocalGame />} />
            <Route path="joingame" element={<Match />} /> 
            <Route path="rules" element={<Instructions />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Outlet /> 
    </div>
    </>
 
  );
}

export default App;
