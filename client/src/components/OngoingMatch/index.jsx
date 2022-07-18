import { Answer, Question } from '..';

const answerNumber = [1, 2, 3, 4];

export default function OngoingMatch() {
  return (
    <>
      <h1>This is the Ongoing Match</h1>
      <Question />
      {answerNumber.map((item, index) => (
        <Answer key={index} answer={item}></Answer>
      ))}
    </>
  );
}
