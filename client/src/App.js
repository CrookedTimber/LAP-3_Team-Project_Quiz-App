import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { userActions } from './reducers/userReducer';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username);

  dispatch(userActions.setUsername('Edgar'));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{username}</h1>
      </header>
    </div>
  );
}

export default App;
