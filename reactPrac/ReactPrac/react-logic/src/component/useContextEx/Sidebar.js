import { useContext } from "react";
import "./Sidebar.css";
import { ProjectContext } from "./store/project";
export default function Sidebar() {
  const { selectProj, createProj, selectedProj}=useContext(ProjectContext)
  const side = {
    backgroundColor: "#f1f1f1",
    width: "20vw",
    padding: "10px 0px 0px",
    height: "100vh",
    float: "left",
  };

  return (
    <aside style={side}>
      <h2>Create project</h2>
      <button className="btn btn-primary" onClick={createProj}>Add project</button>
      <ul className="select">
        {selectProj.projects.length > 0 &&
          selectProj.projects.map((project) => (
            <li key={project.id} onClick={() => selectedProj(project.id)}>
              {project.title}
            </li>
          ))}
      </ul>
    </aside>
  );
}
