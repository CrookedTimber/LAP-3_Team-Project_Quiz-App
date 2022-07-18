import './App.css';
import { useDispatch } from 'react-redux';
import { userActions, matchActions } from './reducers';
import { useSelector } from 'react-redux';
import {API} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <API/>
      </header>
    </div>
  );
}

export default App;
