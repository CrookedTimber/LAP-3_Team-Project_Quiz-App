import { useSelector } from "react-redux";
import { Card, Table } from "react-bootstrap";
import "./UserProfileCard.css";

export default function UserProfileCard() {

    const username = useSelector((state) => state.user.username);

    return (
        <>
            <Card className="userProfileCard shadow">
            <Card.Header id="welcome-username">{`Hello, ${username}!`}</Card.Header>
              <Card.Body>
                <h3>Player Stats</h3>
                <Table striped bordered >
                  <thead>
                    <tr>
                      <th>No. Games Played</th>
                      <th>Highest Score</th>
                      <th>Most Played Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>25</td>
                      <td>animals</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
          </Card>
        </>
          )
        }