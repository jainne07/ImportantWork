import Task from "./Task";
export default function SelectedProj({
  project,
  onCancel,
  onDelete,
  task,
  addTask,
  deleteTask,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(project.id);
  console.log(task)
  return (
    <>
      <button onClick={onCancel}>Cancel</button>{" "}
      <button onClick={onDelete}>delete</button>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{formattedDate}</p>
      <hr />
      <Task task={task} addTask={addTask} deleteTask={deleteTask} project={project}/>
    </>
  );
}
