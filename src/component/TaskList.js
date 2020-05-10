import React from 'react'
import "./style/TaskList.css";

export default function TaskList({ id, data, completeTodo, removeTodo}) {
	return (
		<li className="list-group-item">
			<div className="todo-indicator bg-warning"></div>
			<div className="widget-content p-0">
				<div className="widget-content-wrapper">
					<div className="widget-content-left mr-2">
						<div className="custom-checkbox custom-control"> 
							<input 
								className="custom-control-input" 
								id={id} 
								type="checkbox"
								onClick={() => completeTodo(id)}
							/>
							<label className="custom-control-label" htmlFor={id}>&nbsp;</label> 
						</div>
					</div>
					<div className="widget-content-left">
						<div 
							className="widget-heading" 
							style={{textDecoration: (data.isCompleted) ? "line-through" : ""}}
						>
							{data.title}
							{/* <div className="badge badge-danger ml-2">Rejected</div> */}
						</div>
						{/* <div className="widget-subheading"><i>By Bob</i></div> */}
					</div>
					<div className="widget-content-right"> 
						<button className="border-0 btn-transition btn btn-outline-danger" onClick={() => removeTodo(id)}> 
							<i className="fa fa-trash"></i>
						</button> 
					</div>
				</div>
			</div>
		</li>
	)
}
