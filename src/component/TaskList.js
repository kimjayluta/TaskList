import React from 'react'
import "./style/TaskList.css";

export default function TaskList() {
	return (
		<li className="list-group-item">
			<div className="todo-indicator bg-warning"></div>
			<div className="widget-content p-0">
				<div className="widget-content-wrapper">
					<div className="widget-content-left mr-2">
						<div className="custom-checkbox custom-control"> 
							<input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox"/>
							<label className="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label> 
						</div>
					</div>
					<div className="widget-content-left">
						<div className="widget-heading">Call Sam For payments 
							<div className="badge badge-danger ml-2">Rejected</div>
						</div>
						<div className="widget-subheading"><i>By Bob</i></div>
					</div>
					<div className="widget-content-right"> 
						<button className="border-0 btn-transition btn btn-outline-danger"> 
							<i className="fa fa-trash"></i>
						</button> 
					</div>
				</div>
			</div>
		</li>
	)
}
