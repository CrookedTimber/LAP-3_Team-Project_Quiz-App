import { Answer, Question, Timer } from '..';
import { useSelector } from 'react-redux';

export default function OngoingMatch() {
  const questions = useSelector((state) => state.match.questionsArray);
  const qIndex = useSelector((state) => state.match.currentRoundNum);

  return (
    <>
      <h1>This is the Ongoing Match</h1>
      <Question question={questions[qIndex].question} />
      {questions[qIndex].answers.map((item, index) => (
        <Answer
          key={index}
          isCorrect={item.isCorrect}
          answer={item.answer}
        ></Answer>
      ))}
      <Timer done="30" />
    </>
  );
}
