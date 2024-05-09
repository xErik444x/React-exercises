import Button from 'react-bootstrap/Button';
import CardBS from 'react-bootstrap/Card';


export default function Card({task, setTasks, tasks}) {
  function deleteTask() {
    const { id } = task;
    let index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      setTasks(newTasks);
    }
  }
  return (
    <CardBS style={{ width: '18rem', textAlign:"center"}} data-bs-theme="dark">
      <CardBS.Body>
        <CardBS.Title>{task?.title}</CardBS.Title>
        <CardBS.Text>
        {task?.desc}
        </CardBS.Text>
        <Button variant="danger" onClick={deleteTask}>Delete</Button>
      </CardBS.Body>
    </CardBS>
  )
}
