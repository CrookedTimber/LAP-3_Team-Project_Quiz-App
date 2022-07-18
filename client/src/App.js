import './App.css';
import { useDispatch } from 'react-redux';
import { userActions, matchActions } from './reducers';
import { useSelector } from 'react-redux';
import {API, MatchLogic} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <API/>
        <MatchLogic/>
      </header>
    </div>
  );
}

export default App;
