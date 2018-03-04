import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
    let list = props.list.map(elem => <Todo key={elem.id} text={elem.text} elemId={elem.id} removeTodo={props.removeTodo} />);

	return (
		<ul className={style.list}>{list}</ul>
    )
};

export default TodoList;