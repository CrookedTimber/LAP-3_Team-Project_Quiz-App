import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { matchActions } from '../../reducers';
import axios from 'axios';

export default function Lobby({roomNum, isHost, socket}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* --- Socket emits --- */
  /* --- Host --- */

  //host start game
  function hostStartGame(questions){
    socket.emit('host_start_game', {roomNum, questions});
  }

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

  const getData = async (target) => {
    try {
      const result = await axios.get(
        `https://opentdb.com/api.php?amount=${target.questionsNumber.value}&category=${target.category.value}&difficulty=${target.difficulty.value}&type=multiple`
      );
      const data = await result.data;
      return data;
    } catch (error) {
      console.warn(error.message);
    }
  };

  const startGame = async (e) => {
    e.preventDefault();
    let apiQuestions = await getData(e.target);

    let restructuredQuestions = [];

    const shuffleArray = (array) => {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }

    apiQuestions.results.map((item) => {
      return restructuredQuestions.push({
        question: item.question,
        answers: /* shuffleArray( */[
          { isCorrect: true, answer: item.correct_answer },
          { isCorrect: false, answer: item.incorrect_answers[0] },
          { isCorrect: false, answer: item.incorrect_answers[1] },
          { isCorrect: false, answer: item.incorrect_answers[2] },
        ]/* ) */,
      });
    });

    dispatch(matchActions.updateQuestionsArray(restructuredQuestions));
    dispatch(matchActions.updateGameStart());
    hostStartGame(restructuredQuestions);
  };

  return (
    <>
      <Button onClick={backToMainButton}>Main Menu</Button>
      <h1>This is the lobby</h1>
      <h2>{`Room Number: ${roomNum}`}</h2>

      {
        isHost ?
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
        : null
      }
    </>
  );
}
