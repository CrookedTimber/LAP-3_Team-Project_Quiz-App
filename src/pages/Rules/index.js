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
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Local Game</Accordion.Header>
                        <Accordion.Body>
                            <ul className="ul">
                                <li>Selecting this button, will take you to the lobby.</li>
                                <li>Set up your local game:
                                    <ol>                               
                                        <li>Select your difficulty from: Easy, Medium or Hard.</li>
                                        <li>Select a Category.</li>
                                        <li>Choose the number of questions to be asked: 5, 10, 15 or 20.</li>
                                        <li>When ready, press the start button!</li>
                                    </ol>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Online Game</Accordion.Header>
                        <Accordion.Body>
                        <ul className="ul">
                                <li>Selecting this button, will take you to the online lobby.</li>
                                <li>Set up your online game:
                                    <ol>
                                        <li>Select your difficulty from: Easy, Medium or Hard.</li>
                                        <li>Select a Category.</li>
                                        <li>Choose the number of questions to be asked: 5, 10, 15 or 20.</li>
                                        <li>When ready, press the start button!</li>
                                    </ol>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </Container>
        </>
    )
}