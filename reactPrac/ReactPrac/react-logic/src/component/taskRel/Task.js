import NewTask from "./NewTask"

export default function Task({task, addTask, deleteTask, project}){
    let selectedTask = task.filter(
        (task) => task.projectId === project.id
      );
      console.log('chk',selectedTask)
    return (
        <section style={{ width: "calc(100vw -10)" }}>
            <NewTask addTask={addTask}/>
            {(task.length === 0 || selectedTask.length === 0) && <p>Create task</p> }
            {selectedTask.length > 0 &&
              selectedTask.map((task) => (
                <ul className="task" key={task.id}>
                <li  style={{listStyle: "none"}}>
                  {task.name} <button onClick={()=>deleteTask(task.id)}>Clear</button>
                </li>
                </ul>
              ))
          }
        </section>
    )
}