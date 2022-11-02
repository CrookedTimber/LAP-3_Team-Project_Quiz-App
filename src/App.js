import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Instructions, Leaderboard, Match, NotFound } from './pages/';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="rules" element={<Instructions />}></Route>
        <Route path="leaderboard" element={<Leaderboard />}></Route>
        <Route path="match" element={<Match />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;