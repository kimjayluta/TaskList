import React from 'react'
import TaskList from './TaskList'
import './style/TaskList.css';

export default function Todos() {
	return (
		<div className="card w-50 mx-auto mt-5 card-bg">
			<div className="card-header" style={{color: "#6930b1", textAlign:"center"}}>
				<i className="fa fa-tasks"></i>&nbsp;
				<span style={{fontWeight: "bold", fontSize: "20px"}}>Task for Today!</span>
			</div>
			<ul className="list-group list-group-flush">
				<TaskList />
			</ul>
			<div className="card-footer">
				<button className="btn btn-success">
					<i className="fas fa-plus"></i>&nbsp;New Task
				</button>
			</div>
		</div>
	);
}
