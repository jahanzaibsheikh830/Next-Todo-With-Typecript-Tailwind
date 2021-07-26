interface ButtonProps {
  name?: string;
  width?: string;
  padding?: string;
  text?: string;
  deleteTodo?: () => void;
  updateTodo?: () => void;
}
function Button({
  name,
  width,
  padding,
  text,
  deleteTodo,
  updateTodo,
}: ButtonProps) {
  return (
    <button
      onClick={deleteTodo ? deleteTodo : updateTodo}
      className={`bg-blue-500 hover:bg-blue-700 ${
        width ? width : ""
      } text-white  ${padding} ${text} rounded `}
    >
      {name}
    </button>
  );
}
export default Button;
