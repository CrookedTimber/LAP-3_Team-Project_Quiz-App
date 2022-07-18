import { Container } from "react-bootstrap";
// import { OngoingMatch, Lobby } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducers/userReducer';
import DashboardForm from "../../components/Forms/DashboardForm";
import "./Dashboard.css";

export default function Dashboard(props) {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.username);

    dispatch(userActions.setUsername(username));

    return (
        <>
            <article className="dash-container">
                <h1 id="welcome-username"><span>Welcome {props.username}!</span></h1>
                <Container className="dash-mid-container">
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