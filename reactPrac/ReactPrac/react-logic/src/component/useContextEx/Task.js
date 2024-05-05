import { useContext } from "react";
import  { ProjectContext } from "./store/project";
import NewTask from "./NewTask"
export default function Task(){
  const {selectProj, deleteTask}=useContext(ProjectContext)
    let selectedTask = selectProj.task.filter(
        (task) => task.projectId === selectProj.selectedProjectId
      );
    return (
        <section style={{ width: "calc(100vw -10)" }}>
            <NewTask/>
            {(selectProj.task.length === 0 || selectedTask.length === 0 ) && <p>Create task</p> }
            {selectedTask.length > 0 &&
              selectedTask.map((task) => (
                <ul className="task" key={task.id}>
                <li  style={{listStyle: "none"}}>
                  {task.name} <button className="btn btn-muted" onClick={()=>deleteTask(task.id)}>Clear</button>
                </li>
                </ul>
              ))
          }
        </section>
    )
}