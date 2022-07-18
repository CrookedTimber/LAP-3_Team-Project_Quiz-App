import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Lobby() {
  const navigate = useNavigate();

  const categories = [
    { code: 9, name: 'General Knowledge' },
    { code: 10, name: 'Books' },
    { code: 11, name: 'Movies' },
    { code: 12, name: 'Music' },
    { code: 17, name: 'Science and Nature' },
    { code: 20, name: 'Mythology' },
    { code: 23, name: 'History' },
    { code: 25, name: 'Art' },
  ];

  const backToMainButton = () => {
    navigate('/');
  };

  const startGame = async (e) => {
    e.preventDefault();
    console.log('Game Started!');
  };

  return (
    <>
      <Button onClick={backToMainButton}>Main Menu</Button>
      <h1>This is the lobby</h1>
      <h2>{`Room Number: ${'####'}`}</h2>
      <Form onSubmit={startGame}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category">Category</Form.Label>
          <Form.Select id="category" name="category">
            {categories.map((category, index) => (
              <option key={index} value={category.code}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <Form.Label htmlFor="difficulty">Difficulty</Form.Label>
          <Form.Select id="difficulty" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
          <Form.Label htmlFor="questionsNumber">Number of questions</Form.Label>
          <Form.Select name="questionsNumber" id="questionsNumber">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Start Game</Button>
      </Form>
    </>
  );
}
