interface Todosprops {
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  setTodo: (value?: React.SetStateAction<string>) => void;
}
function TextField({
  setTodo,
  value,
  placeholder,
  type,
  disabled,
}: Todosprops) {
  return (
    <input
      className={`${
        placeholder === "Type something" ? "text_field" : "text_field_update"
      }`}
      type={type}
      placeholder={placeholder}
      required
      value={value}
      disabled={disabled}
      onChange={(e: any) => setTodo(e)}
    />
  );
}
export default TextField;
