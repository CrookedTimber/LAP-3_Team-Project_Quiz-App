import "./Leaderboard.css";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Leaderboard() {
    return (
        <>
        <Container className="leaderboard-container shadow">
            <h1>Highest Scorers!</h1>
            <Container className="top5-list shadow">
                <ListGroup id="leaderboard" className="top5">
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            </Container>
        </Container>
        </>
    )
}