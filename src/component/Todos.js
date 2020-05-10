import React, { useState } from 'react';
import TaskList from './TaskList';
import Modal from 'react-bootstrap/Modal';

import "bootstrap/dist/css/bootstrap.min.css";
import './style/TaskList.css';

import FormModal from './FormModal';

export default function Todos() {
	const [displayModal, setDisplayModal] = useState(false);
	
	const [todos, setTodos] = useState([
		{
			title: "Todo 1",
			isCompleted: false
		},
		{
			title: "Todo 2",
			isCompleted: false
		},
		{
			title: "Todo 3",
			isCompleted: false
		}
	]);

	const addTodos = title => {
		const newTitle = {
			title,
			isCompleted: false
		}

		const newTodos = [...todos, newTitle];
		setTodos(newTodos);
		setDisplayModal(false);
	}

	const completeTodo = id => {
		const newTodos = [...todos];
		
		if (newTodos[id].isCompleted === false) {
			newTodos[id].isCompleted = true;
		} else {
			newTodos[id].isCompleted = false;
		}

		setTodos(newTodos);
	}

	const removeTodo = id => {
		let newTodos = [...todos];
		newTodos.splice(newTodos[id], 1);
		setTodos(newTodos);
	}

	return (
		<>
			<div className="card w-50 mx-auto mt-5 card-bg">
				<div className="card-header" style={{color: "#6930b1", textAlign:"center"}}>
					<i className="fa fa-tasks"></i>&nbsp;
					<span style={{fontWeight: "bold", fontSize: "20px"}}>Task for Today!</span>
				</div>
				<ul className="list-group list-group-flush">
					{todos.map((todo, index) => {
						return <TaskList 
									key={index} 
									id={index} 
									data={todo} 
									completeTodo={completeTodo} 
									removeTodo={removeTodo}
								/>
					})}
				</ul>
				<div className="card-footer">
					<button className="btn btn-success" onClick={() => setDisplayModal(true)}>
						<i className="fas fa-plus"></i>&nbsp;New Task
					</button>
				</div>
			</div>

			<Modal show={displayModal} onHide={() => setDisplayModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Create new Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormModal addTodos={addTodos} setDisplayModal={setDisplayModal}/>
				</Modal.Body>
			</Modal>
		</>
	);
}
