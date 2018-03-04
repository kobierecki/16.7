import React from 'react';
import style from './TodoList.css';

const TodoForm = (props) => <input onKeyPress={(e) => props.addTodo(e)} onChange={(e) => props.onFieldChange(e, 'newTodo')} placeholder='Wpisz zadanie i naciśnij enter' value={props.newTodo} className={style.addTodo}/>;
export default TodoForm;