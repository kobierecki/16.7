import React from 'react';
import style from './TodoList.css';

const Todo = (props) => <li onClick={() => props.removeTodo(props.elemId)} className={style.elemList}>{props.text}</li>;

export default Todo;