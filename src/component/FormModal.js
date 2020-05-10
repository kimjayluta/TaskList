import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import "bootstrap/dist/css/bootstrap.min.css";

export default function FormModal({ addTodos, setDisplayModal }) {
	
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!title) return;
		addTodos(title);
		setTitle('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="form-control" 
				type="text"
				placeholder="Enter your task here..."
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => setDisplayModal(false)}>
					Cancel
				</button>
				<button className="btn btn-outline-primary" type="Submit">
					Save Changes
				</button>
			</Modal.Footer>
		</form>
	)
}
