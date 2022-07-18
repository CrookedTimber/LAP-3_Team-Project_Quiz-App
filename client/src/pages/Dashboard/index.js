import { Container } from "react-bootstrap";
// import { OngoingMatch, Lobby } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducers/userReducer';

export default function Dashboard() {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.username);

    dispatch(userActions.setUsername('Edgar'));

    return (
        <>
            <article className="dash-container">
                <h1>Welcome {username}!</h1>
                <Container className="dash-inner-container">
                    
                </Container>
            </article>
        </>
    )
}