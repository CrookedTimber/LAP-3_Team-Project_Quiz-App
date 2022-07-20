import '../OngoingMatch/quiz.css';
export default function Answers(props) {
  const options = ['A', 'B', 'C', 'D'];


  const onAnswerSelection = () => {}
  return (
    <>
      <div onClick={() => onAnswerSelection} className="answer">
        <h3 className="answer-letter">{options[props.option]}</h3>

        <h2 dangerouslySetInnerHTML={{ __html: props.answer }}></h2>
      </div>
    </>
  );
}
