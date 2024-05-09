import Button from 'react-bootstrap/Button';
import FormBS from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
export default function Form({ setTasks, tasks }) {
	const [task, setTask] = useState({
		title: '',
		desc: '',
		id: '',
	});

	function handleTitle(ev) {
		setTask({ ...task, title: ev.target.value });
	}
	function handleDesc(ev) {
		setTask({ ...task, desc: ev.target.value });
	}

	function createTasks() {
		if(task.desc == "" || task.title == "") return;
		setTasks([...tasks, { ...task, id: crypto.randomUUID() }]);
		setTask({ title: '', desc: '', id: '' });
	}
	return (
		<FormBS className="mb-2" style={{ maxWidth: '400px', margin: 'auto' }}>
			<FormBS.Group className="mb-1" controlId="formGroupEmail">
				<FormBS.Label>Title</FormBS.Label>
				<FormBS.Control
					type="text"
					placeholder="..."
					onChange={handleTitle}
					value={task.title}
				/>
			</FormBS.Group>
			<FormBS.Group className="mb-1" controlId="formGroupPassword">
				<FormBS.Label>Description</FormBS.Label>
				<FormBS.Control
					as="textarea"
					rows={3}
					placeholder="..."
					onChange={handleDesc}
					value={task.desc}
				/>
			</FormBS.Group>
			<FormBS.Group className="mb-1">
				<Col>
					<Button
						onClick={createTasks}
						style={{ maxWidth: '400px', margin: 'auto' }}
					>
						Create
					</Button>
				</Col>
			</FormBS.Group>
		</FormBS>
	);
}
