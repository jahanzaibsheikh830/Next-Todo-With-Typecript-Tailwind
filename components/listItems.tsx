import React, { useState } from "react";
import Btn from "./button";
import TextField from "./textfield";
interface Todosprops {
  todos: string[];
  setTodosItem: (value: React.SetStateAction<string[]>) => void;
}




function ListItem({ todos, setTodosItem }: Todosprops) {
  const [isTrue, setIsTrue] = useState(false);
  const [updateTodoInput, setUpdateTodoInput] = useState("");
  const [updateTodoIndex, setUpdateTodoIndex] = useState<number>();
  function del(i: number) {
    setTodosItem((prev) => prev.filter((item, idx) => idx !== i));
  }
  function setTodosValue(i: number, todoItem: string) {
    setUpdateTodoInput(todoItem);
    setIsTrue(true);
    setUpdateTodoIndex(i);
  }
  function updateTodo(e: any) {
    e.preventDefault();
    setTodosItem((prev) =>
      prev.filter((item, idx) => {
        if (idx === updateTodoIndex) {
          prev.splice(idx, 1, updateTodoInput);
          let newTodo = [...prev];
          setIsTrue(false);
          return setTodosItem(newTodo);
        }
      })
    );
  }
  return (
    <div>
      {isTrue ? (
        <form onSubmit={updateTodo}>
          <div className='mb-5'>
            <TextField
              setTodo={(e: any) => setUpdateTodoInput(e.target.value)}
              value={updateTodoInput}
              type='text'
              placeholder='Type something'
            />
            <Btn name='update' />
          </div>
        </form>
      ) : (
        <div>
          {todos &&
            todos?.map((todoItem, i) => {
              return (
                <div key={i} className='flex justify-between mb-3'>
                  <div>
                    <h2>{todoItem}</h2>
                  </div>
                  <div>
                    <span className='mr-2'>
                      <Btn name='delete' deleteTodo={() => del(i)} />
                    </span>
                    <span>
                      <Btn
                        name='edit'
                        updateTodo={() => setTodosValue(i, todoItem)}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default ListItem;
