import React, { useState } from "react";
import TextField from "../components/textfield";
import ListItem from "../components/listItems";
import Btn from "../components/button";
export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  function addTodo(event: any) {
    event.preventDefault();
    setTodos((prev): string[] => [...prev, todo]);
    setTodo("");
  }
  return (
    <div className='container mx-auto'>
      <div>
        <div className='text-center text-4xl mb-5'>
          <p className='text-gray'>Todo</p>
        </div>
        <div>
          <form onSubmit={addTodo}>
            <TextField
              setTodo={(e: any) => setTodo(e.target.value)}
              value={todo}
              type='text'
              placeholder='Type something'
            />
            <Btn name='add' width='w-3/12' padding='py-1 px-4' />
          </form>
        </div>
        <div>
          <ListItem todos={todos} setTodosItem={setTodos} />
        </div>
      </div>
    </div>
  );
}
