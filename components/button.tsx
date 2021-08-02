interface ButtonProps {
  name?: string;
  deleteTodo?: () => void;
  updateTodo?: () => void;
}
function Button({ name, deleteTodo, updateTodo }: ButtonProps) {
  return (
    <button
      onClick={deleteTodo ? deleteTodo : updateTodo}
      className={` ${
        name === "add" || name === "update" ? "btn_big" : "btn_small"
      }`}
    >
      {name}
    </button>
  );
}
export default Button;
