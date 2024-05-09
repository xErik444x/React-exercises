import Container from 'react-bootstrap/Container';
import Tasks from './Tasks';
import { useEffect, useState } from 'react';
import Form from './Form';
import {getVar, setVar} from '../utils/storage';

export default function ToDoLayout() {
  const [tasks, setTasks] = useState(getVar("tasks") ?? [])

  useEffect(() => {
    setVar({obj: tasks, name:"tasks"})
  }, [tasks])

  return (
    <Container>
      <Form tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </Container>
  )
}
