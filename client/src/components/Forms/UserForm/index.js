import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

export default function UserForm() {
    const [ username, setUsername ] = useState("");
    const navigate = useNavigate();
    const Dashboard = "../../../pages";
    
    const handleInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(Dashboard);
        setUsername("");
        }

    return (
        <>
            <Container className="username-form-container">
            <h3 className="username-form-header">To start, please enter a username!</h3>
                <Form className="user-form shadow" onSubmit={handleSubmit} role="form">
                    <input id="username-input" onChange={handleInput} type="text" value={username} placeholder="USERNAME" required></input>
                    <input id="username-button" type="submit" value="START"></input>
                </Form>
            </Container>
        </>
    )
}