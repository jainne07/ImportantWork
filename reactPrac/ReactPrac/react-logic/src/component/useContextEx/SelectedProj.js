import Task from "./Task";
import { useContext } from "react";
import  { ProjectContext } from "./store/project";
export default function SelectedProj({project}) {
  const {cancelProj, deleteProj}=useContext(ProjectContext);
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <>
      <button onClick={cancelProj}>Cancel</button>{" "}
      <button onClick={deleteProj}>delete</button>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{formattedDate}</p>
      <hr />
      <Task/>
    </>
  );
}
