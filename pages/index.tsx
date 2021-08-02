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
    <div className='main'>
      <div>
        <div className='todo_heading'>
          <p className='text_color'>Todo</p>
        </div>
        <div className='mb-5'>
          <form onSubmit={addTodo}>
            <TextField
              setTodo={(e: any) => setTodo(e.target.value)}
              value={todo}
              type='text'
              placeholder='Type something'
            />
            <Btn name='add' />
          </form>
        </div>
        <div>
          <ListItem todos={todos} setTodosItem={setTodos} />
        </div>
      </div>
    </div>
  );
}
