import "./LocalGame.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { matchActions } from '../../reducers';
import axios from 'axios';
import { Button, Form, Container } from "react-bootstrap";
import { render } from "react-dom";

export default function LocalGame() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    
      const player1 = "../../assets/player-1.png";
      const player2 = "../../assets/player-2.png";
      const player3 = "../../assets/player-3.png";
      const player4 = "../../assets/player-4.png";
      const players = [player1, player2, player3, player4]
    

    function handlePlayer() {
        if (players.value === 1) {
            return(player1)
        } else if (players.value === 2) {
            return(player1 && player2)
        } else if (players.value === 3) {
            return(player1 && player2 && player3)
        } else return(player1 && player2 && player3 && player4)
    }
  
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
          answers: [
            { isCorrect: true, answer: item.correct_answer },
            { isCorrect: false, answer: item.incorrect_answers[0] },
            { isCorrect: false, answer: item.incorrect_answers[1] },
            { isCorrect: false, answer: item.incorrect_answers[2] },
          ],
        });
      });
  
      dispatch(matchActions.updateQuestionsArray(restructuredQuestions));
  
      dispatch(matchActions.updateGameStart());
    };


  

    return (
        <>
            <Container>
                <Button onClick={backToMainButton}>Main Menu</Button>
                <h1>Create a Local Game</h1>
                
                <Form onSubmit={startGame}>
                    <Form.Group className="mb-3">
                    <Form.Label htmlFor="players">Number of Players</Form.Label>
                        <Form.Select id="players" name="players" onSelect={handlePlayer}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
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
    </Container>
    </>
  );
}

           