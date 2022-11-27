import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';
import './Question.css';

export default function Question(props) {
  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);

  return (
    <>
      <Container className="question-container shadow">
        <div className="d-flex justify-content-center dev-btns-banner"></div>
        <h3 className="questionOfNum">{`Question ${qIndex + 1} of ${
          questions.length
        }`}</h3>
        <div className="question-banner">
          <h1
            className="question shadow"
            key={`${props.id}h`}
            dangerouslySetInnerHTML={{ __html: props.question }}
          ></h1>
        </div>
      </Container>
    </>
  );
}
