import "./Leaderboard.css";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Leaderboard() {
    return (
        <>
        <Container className="leaderboard-container shadow">
            <h1>Highest Scorers!</h1>
            <Container className="top5-list">
                <ListGroup id="leaderboard" className="top5">
                    <ListGroupItem>Sam     45</ListGroupItem>
                    <ListGroupItem>Ben     39</ListGroupItem>
                    <ListGroupItem>Abigail 35</ListGroupItem>
                    <ListGroupItem>Edgar   32</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            </Container>
        </Container>           
        </>
    )
}
