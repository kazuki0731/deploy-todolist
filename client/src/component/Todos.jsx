import React from "react";

const MainTodos = (props) => {
  const { classes, todos, completeTodo, deleteTodo, moveTodos } = props;

  return (
    <div className={classes.todosContainer}>
      <p>☆未完了☆</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className={todo.iscompleted ? classes.active : ""}>
              {todo.todo}
            </span>
            <button onClick={() => completeTodo(index)}>完了</button>
            <button onClick={() => deleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
      <button className={classes.todosMoveBtn} onClick={moveTodos}>
        下へ
      </button>
    </div>
  );
};

export default MainTodos;
