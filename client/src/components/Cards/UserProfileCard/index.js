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
                <Table className="table shadow">
                  <tr>
                    <th>
                      <td>No. Games Played</td>
                      <td>Highest Score</td>
                      <td>Most Played Category</td>
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </Table>
              </Card.Body>
          </Card>
        </>
          )
        }