export default function Square(props) {
  return (
    <button
      id={`square-${props.pos}`}
      name={`square-${props.pos}`}
      className="square"
      aria-label={`square-${props.pos}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
