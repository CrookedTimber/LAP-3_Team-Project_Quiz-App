import { Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { userActions } from '../../../reducers';
import UserProfileCard from "../../Cards/UserProfileCard";
import "./NewGameButtons.css";

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleExit = () => {
    localStorage.removeItem('username');
    dispatch(userActions.resetUser());
    navigate("/");
    }

  const localGame = "/LocalGame";
  const hostGame = "/Lobby";
  const joinGame = "/Match";

  return (
    <>
      <article className="dash-container">
        <Container className="dash-mid-container">
          <UserProfileCard />
          
          <Form className="form shadow" onSubmit={handleExit}>
                    <label htmlFor="exit-btn"></label>
                    <input id="exit-btn" type="submit" value="BACK HOME"></input>
                </Form>
                <Form className="form shadow">
                    <label htmlFor="local-game-btn"></label>
                    <a className="a" id="local-game-btn" href={localGame}>Local Game</a>
                </Form>
                <Form className="form shadow">
                    <label htmlFor="host-game-btn"></label>
                    <a className="a" id="host-game-btn" href={hostGame}>Host a Game</a>
                </Form>
                
                <Form className="form shadow">
                    <label htmlFor="join-game-btn"></label>
                    <a className="a" id="join-game-btn" href={joinGame}>Join a Game</a>
                </Form>              
            </Container>
        <Outlet />
      </article>
    </>
  );
}
