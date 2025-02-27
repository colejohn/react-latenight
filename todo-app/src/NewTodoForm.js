import React, { Component } from 'react';
import { v4 } from 'uuid';
import './NewTodoForm.css';
class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: [ evt.target.value ]
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const newTodo = { ...this.state, id: v4(), completed: false };
		this.props.createTodo(newTodo);
		this.setState({ task: '' });
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task">Task: </label>
				<input
					type="text"
					name="task"
					placeholder="New Todo"
					id="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
