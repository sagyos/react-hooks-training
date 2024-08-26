import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function UseCallbackExercise() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState({
    0: "Clean the house",
    1: "Take out the dog",
    2: "Refill gas",
  });

  const list = Object.values(todos).map((todo) => todo);

  const printList = useCallback(() => {
    console.log("submiting", list);
  }, []);

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <label>
          Enter new todo:
          <input
            style={{
              marginLeft: "16px",
              borderRadius: "4px",
              border: "1px solid #5c5b5b",
              padding: "4px 6px",
            }}
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        </label>
        <div className="card">
          <button
            onClick={() =>
              setTodos((prev) => {
                const newTodo = todoValue;
                setTodoValue("");
                return { ...prev, [newTodo]: newTodo };
              })
            }
          >
            Add todo
          </button>
        </div>
      </div>
      <div>
        My Todo List
        <ul>
          {list.map((todo) => {
            return (
              <li
                key={todo}
                style={{
                  textAlign: "start",
                }}
              >
                {todo}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card">
        <button onClick={printList}>Submit todos</button>
      </div>
    </>
  );
}

export default UseCallbackExercise;
