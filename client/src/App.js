import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Dashboard, Home, Instructions, Leaderboard } from './pages/';


import './App.css';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="rules" element={<Instructions />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
