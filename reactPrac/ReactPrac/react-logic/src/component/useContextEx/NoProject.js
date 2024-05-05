import { useContext } from "react";
import { ProjectContext } from "./store/project";
export default function NoProject() {
  const { createProj }=useContext(ProjectContext)
  return (
   <section style={{ width: "calc(100vw -10)" }}>
        <p>No project yet created</p>
        <button className="btn btn-info" onClick={createProj}>Create project</button>
     </section>
    );
}
