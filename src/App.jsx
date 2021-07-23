import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="ToDoを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>
              これをする
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
          <div className="list-row">
            <li>
              あれをする
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p>完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>
              これをする
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
