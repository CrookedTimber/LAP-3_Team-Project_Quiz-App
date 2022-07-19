import { Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { userActions } from '../../../reducers';
import { UserProfileCard }from "../../Cards";
import "./NewGameButtons.css";

export default function NewGameButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleExit = () => {
    localStorage.removeItem('username');
    dispatch(userActions.resetUser());
    navigate("/");
    }

  const handleLocal = () => {
    navigate("../../../pages/LocalGame");
  }

  const handleHost = () => {
    dispatch(userActions.localGame());
  }
  const handleJoin = () => {
    dispatch(userActions.joinGame());
  };

  
  return (
    <>
      <article className="dash-container">
        <Container className="dash-mid-container">
          <UserProfileCard />
          
          <Form className="form shadow" onSubmit={handleExit}>
                    <label htmlFor="exit-btn"></label>
                    <input id="exit-btn" type="submit" value="BACK HOME"></input>
                </Form>
               
                <Form className="form shadow" onSubmit={handleLocal}>
                    <label htmlFor="local-game-btn"></label>
                    <input id="local-game-btn" type="submit" value="LOCAL GAME"></input>
                </Form>
                
                <Form className="form shadow" onSubmit={handleHost}>
                    <label htmlFor="host-game-btn"></label>
                    <input id="host-game-btn" type="submit" value="HOST ONLINE"></input>
                </Form>
                
                <Form className="form shadow" onSubmit={handleJoin}>
                    <label htmlFor="join-game-btn"></label>
                    <input id="join-game-btn" type="submit" value="JOIN A GAME"></input>
                </Form>              
            </Container>
        <Outlet />
      </article>
    </>
  );
}
