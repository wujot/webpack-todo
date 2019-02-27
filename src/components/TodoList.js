import React from "react";
import style from "./TodoList.css";

const TodoList = props => {
  return (
    <ul className={style.TodoList}>
      {props.data.map(item => {
        return (
          <li className={style.TodoItem} key={item.id}>
            <p onClick={() => props.remove(item.id)}>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
