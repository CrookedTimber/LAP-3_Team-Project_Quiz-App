import QuizLogo from '../../assets/quiz-logo.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Home.css';

import { userActions } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NewGameButtons } from '../../components';

export default function Home() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);

  const [input, setInput] = useState('');

  function updateInput(e) {
    setInput(e.target.value);
  }

  function submitUsername(e) {
    e.preventDefault();
    dispatch(userActions.setUsername(input));
    localStorage.setItem('username', input);
    setInput('');
  }

  return (
    <>
      <article className="home-container">
        <Container className="home-inner-container">
          <Container className="welcome-div">
            <h2 className="home-h2a">There's a time for playing it safe ...</h2>
            <h2 className="home-h2b">and there's a time for ...</h2>
            <h1 className="home-h1">Risky Quizness!</h1>
          </Container>
          <Container className="quiz-logo-container">
            <img className="quiz-logo" src={QuizLogo} alt="quiz logo"></img>
          </Container>

          {!username && (
            <form
              onSubmit={submitUsername}
              className="d-flex justify-content-center"
            >
              <label htmlFor="user-input">Choose your username </label>
              <br />
              <input
                type="text"
                id="user-input"
                onChange={updateInput}
                value={input}
              />
              <Button type="submit">Start</Button>
            </form>
          )}
          {username && <NewGameButtons />}
        </Container>
      </article>
    </>
  );
}
