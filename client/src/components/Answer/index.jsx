export default function Answers(props) {
  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: props.answer }}></h2>
    </>
  );
}
