import { Container, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
    return (
        <>
        <Container>
            <Nav className="nav">
                <NavLink className="nav-link nav-link-home" to="/">Home</NavLink>
                <NavLink className="nav-link nav-link-rules" to="/rules">How To Play</NavLink>
                <NavLink className="nav-link nav-link-leaderboard" to="/leaderboard">Leaderboard</NavLink>
                <NavbarBrand className="nav-brand">Risky Quizness</NavbarBrand>
            </Nav>
        </Container>
        </>
    )
}