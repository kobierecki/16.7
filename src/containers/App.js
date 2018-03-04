import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					text: 'clean room'
				}, 
				{
					id: 2,
					text: 'wash the dishes'
				}, 
				{
					id: 3,
					text: 'feed my cat'
				}
			],
			newTodo: ''
		};

		this.removeTodo = this.removeTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(e, field) {
		const value = e.currentTarget.value;

		this.setState({
			[field]: value
		})
	}

	addTodo(e){
		if (e.key != 'Enter') return
		const todo = {
			text: e.currentTarget.value,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({
			data,
			newTodo: ''
		});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	  
	render() {
		return (
			<div className={style.TodoApp}>
				<Title quantity={this.state.data.length} />
				<TodoForm addTodo={this.addTodo} newTodo={this.state.newTodo} onFieldChange={this.onFieldChange}/>
				<TodoList list={this.state.data} removeTodo={this.removeTodo} />
			</div>
		);
	}  
}

export default App;