
import QuizLogo from '../../assets/quiz-logo.png';
import { Container } from 'react-bootstrap';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducers';

export default function Home() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);

  function setBen() {
    dispatch(userActions.setUsername('Ben'));
  }

  function reset() {
    dispatch(userActions.resetUsername());
  }

  return (
    <>
      <article className="home-container">
        <Container className="home-inner-container">
          <Container className="welcome-div">
            <h1>{username}</h1>
            {!username && <h3>Hello</h3>}

            <button onClick={setBen}>Set username to Ben</button>
            <button onClick={reset}>Reset username</button>

            <h2 className="home-h2a">There's a time for playing it safe ...</h2>
            <h2 className="home-h2b">and there's a time for ...</h2>
            <h1 className="home-h1">Risky Quizness!</h1>
          </Container>
          <Container className="quiz-logo-container">
            <img className="quiz-logo" src={QuizLogo} alt="quiz logo"></img>
          </Container>
          
          <form class="form">
      <label>Enter a username: <br></br>
        <input type="text" />
      </label>
    </form>
    <br></br>
    <br></br>
    <button class="startbtn">Start</button>
        </Container>
      </article>
    </>
  );
}

