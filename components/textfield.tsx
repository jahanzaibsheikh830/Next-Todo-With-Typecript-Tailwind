interface Todosprops {
  value?: string;
  placeholder?: string;
  type?: string;
  setTodo: (value?: React.SetStateAction<string>) => void;
}
function TextField({ setTodo, value, placeholder, type }: Todosprops) {
  return (
    <input
      className='shadow appearance-none border w-9/12 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={(e: any) => setTodo(e)}
    />
  );
}
export default TextField;
