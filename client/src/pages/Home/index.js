
import { Container } from "react-bootstrap";
import "./Home.css";

export default function Home() {
    return (
        <>
            <article className="home-container">
                
                <Container className="home-inner-container">
                    <div className="welcome-div">
                        <h2 className="home-h2a">There's a time for playing it safe ... </h2>
                        <h2 className="home-h2b">and there's a time for ...</h2>
                        <h1 className="home-h1">Risky Quizness!</h1>
                    </div>
                </Container>
            </article>
        </>
    )
}