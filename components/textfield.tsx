interface Todosprops {
  value?: string;
  placeholder?: string;
  type?: string;
  setTodo: (value?: React.SetStateAction<string>) => void;
}
function TextField({ setTodo, value, placeholder, type }: Todosprops) {
  return (
    <input
      className='text_field'
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={(e: any) => setTodo(e)}
    />
  );
}
export default TextField;
