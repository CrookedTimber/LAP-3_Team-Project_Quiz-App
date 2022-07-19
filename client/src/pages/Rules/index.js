import { Accordion, Container } from "react-bootstrap";
import "./Rules.css";

export default function Instructions() {
    return (
        <>
            <Container className="rules-container">
                <h1>How to Play</h1>
                <h2>To Begin:</h2>
                <h3>Create a username and select START</h3>
                <p>This will take you to your dashboard where you have the following options:</p>
                <Accordion defaultActiveKey="0" >Local Game
                    <ol eventKey="0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </Accordion>
            </Container>
        </>
    )
}