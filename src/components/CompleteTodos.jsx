import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p>完了したTODO</p>
      <ul>
        {todos.map((todos, index) => {
          return (
            <div key={todos} className="list-row">
              <li>{todos}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
