import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content : newContent,
      regDate : "2023-01-17 12:12:12"
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos)
  } 

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => 
    _index != index ? todo : {...todo, content: newContent}
    );
    setTodos(newTodos);
  };

  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  }

  const onBtnDeleteTodoClick = () => {
    removeTodo(1);
  }

  const onBtnModifyTodoClick = () => {
    modifyTodo(1, "zzz");
  }

  return (
    <>
    <button onClick={onBtnAddTodoClick}>추가</button>
    <button onClick={onBtnDeleteTodoClick}>삭제</button>
    <button onClick={onBtnModifyTodoClick}>수정</button>
    <hr/>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.id} {todo.content} {todo.regDate}
        </li>
      ))}
    </ul>
    </>
  );
}

export default App;