import React, { useState } from "react";
import Btn from "./button";
import ListItem from "./listItems";

function TextField() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  function addTodo(event: any) {
    event.preventDefault();
    setTodos((prev): string[] => [...prev, todo]);
    setTodo("");
  }
  return (
    <div>
      <div className='mb-5'>
        <form onSubmit={addTodo}>
          <input
            className='shadow appearance-none border w-9/12 rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Type Todo'
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Btn name='add' width='w-3/12' padding='py-1 px-4' />
        </form>
      </div>
      <div>
        <ListItem todos={todos} setTodosItem={setTodos} />
      </div>
    </div>
  );
}
export default TextField;
