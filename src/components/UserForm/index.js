import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userActions } from '../../reducers';
import NewGameButtons from '../NewGameButtons';
import "./UserForm.css";

export default function UserForm() {
  const navigate = useNavigate();
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
            <Container className="username-form-container">
                      
                {!username && (
                <Form onSubmit={submitUsername}
                      className="d-flex justify-content-center"
                      required
                      >
                    <label htmlFor="user-input"></label>
                    <br />
                    <input
                        type="text"
                        id="user-input"
                        onChange={updateInput}
                        value={input}
                        required
                        />
                    <Button id="start-btn" type="submit">Start</Button>
                </Form>
                )}
            </Container>
            <Container className="dashboard-container">
                {username && <NewGameButtons />}
            </Container>
            
        </>
    )
}