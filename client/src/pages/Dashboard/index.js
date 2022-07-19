import { Card, Container } from "react-bootstrap";
// import { OngoingMatch, Lobby } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducers/userReducer';
import DashboardForm from "../../components/Forms/DashboardForm";
import "./Dashboard.css";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Dashboard(props) {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.username);

    dispatch(userActions.setUsername(username));

    return (
        <>
            <article className="dash-container">
                <Container className="dash-mid-container">
                        <Card id="welcome-username">
                            <CardHeader>Welcome {username}!</CardHeader>
                            <Card.Body>
                                <Card.Subtitle>Player Stats</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    <Container className="dash-inner-container shadow">
                        <div className="selections">
                            <DashboardForm />
                        </div>
                    </Container>
                </Container>
            </article>
        </>
    )
}