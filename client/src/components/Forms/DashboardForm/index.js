import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import "./DashboardForm.css";

export default function DashboardForm() {

    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/");
    }
    const handleLocal = () => {
        navigate("../../../pages/LocalGame");
    }
    const handleHost = () => {
        navigate("../../../pages/Lobby/index.jsx");
    }
    const handleJoin = () => {
        navigate("../../../pages/Match");
    }
    const handleShow = () => {
        navigate("../../../pages/Leaderboard");
    }

    return (
        <>
            <Container className="db-container">
                <Form className="form shadow" onSubmit={handleExit}>
                    <label htmlFor="exit-btn"></label>
                    <input id="exit-btn" type="submit" value="BACK HOME"></input>
                </Form>
                <hr />
                <Form className="form shadow" onSubmit={handleLocal}>
                    <label htmlFor="local-game-btn"></label>
                    <input id="local-game-btn" type="submit" value="LOCAL GAME"></input>
                </Form>
                <hr />
                <Form className="form shadow" onSubmit={handleHost}>
                    <label htmlFor="host-game-btn"></label>
                    <input id="host-game-btn" type="submit" value="HOST ONLINE"></input>
                </Form>
                <hr />
                <Form className="form shadow" onSubmit={handleJoin}>
                    <label htmlFor="join-game-btn"></label>
                    <input id="join-game-btn" type="submit" value="JOIN A GAME"></input>
                </Form>
                <hr />
                <Form className="form shadow" onSubmit={handleShow}>
                    <label htmlFor="show-scores-btn"></label>
                    <input id="show-scores-btn" type="submit" value="VIEW LEADERBOARD"></input>
                </Form>
            </Container>
        </>
    )
}