import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Dashboard } from "../../../pages";
import "./UserForm.css";

export default function UserForm({ getValue }) {
    const [ userName, setUserName ] = useState("");

    const handleInput = (e) => {
        const input = e.target.value;
        setUserName(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getValue(userName);
        setUserName("");
    }
    return (
        <>
            <Container className="username-form-container">
            <h3 className="username-form-header">To start, please enter a username!</h3>
                <Form  className="user-form" onSubmit={handleSubmit} role="form">
                    <input id="username-input" onChange={handleInput} type="text" value={userName} placeholder="USERNAME" required></input>
                    <input id="username-button" type="submit" to={<Dashboard />} value="START"></input>
                </Form>
            </Container>
        </>
    )
}