import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "これをする",
    "あれをする"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["これをした"]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p>完了したTODO</p>
        <ul>
          {completeTodos.map((todos) => {
            return (
              <div key={todos} className="list-row">
                <li>
                  {todos}
                  <button>完了</button>
                  <button>削除</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
