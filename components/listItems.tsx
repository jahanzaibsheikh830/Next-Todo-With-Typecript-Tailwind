import React from "react";
import Btn from "./button";
interface Todosprops {
  todos: string[];
  setTodosItem: (value: React.SetStateAction<string[]>) => void;
}
function ListItem({ todos, setTodosItem }: Todosprops) {
  function del(i: number) {
    setTodosItem((prev) => prev.filter((item, idx) => idx !== i));
  }
  function updt(i: number, v: string) {
    const updateTodoInput: string = prompt("Please enter new todo", v) || "";
    setTodosItem((prev) =>
      prev.filter((item, idx) => {
        if (idx === i) {
          prev.splice(idx, 1, updateTodoInput);
          let newTodo = [...prev];
          return setTodosItem(newTodo);
        }
      })
    );
  }
  return (
    <div>
      {todos &&
        todos?.map((v, i) => {
          return (
            <div key={i} className='flex justify-between mb-3'>
              <div>
                <h2>{v}</h2>
              </div>
              <div>
                <span className='mr-2'>
                  <Btn
                    name='delete'
                    padding='py-1 px-2'
                    text='text-xs'
                    deleteTodo={() => del(i)}
                  />
                </span>
                <span>
                  <Btn
                    name='update'
                    padding='py-1 px-2'
                    text='text-xs'
                    updateTodo={() => updt(i, v)}
                  />
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default ListItem;
