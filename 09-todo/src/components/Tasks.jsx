import Card from "./Card"
export default function Tasks({tasks, setTasks}) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gridGap: "1em",
    }}>
        {tasks?.map((task) => {
           return(
            <Card task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
           )
        })}
    </div>
  )
}
