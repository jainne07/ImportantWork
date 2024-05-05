import { useContext } from "react";
import NoProject from "./NoProject";
import SelectedProj from "./SelectedProj"
import NewProject from "./NewProject";
import Sidebar from "./Sidebar";
import { ProjectContext } from "./store/project";
export default function Main() {
const { selectProj}=useContext(ProjectContext)
let selectedProject = selectProj.projects.find(
  (proj) => proj.id === selectProj.selectedProjectId
);
let content = (
  <SelectedProj
    project={selectedProject}
  />
);
if (selectProj.selectedProjectId === null) {
  content = <NewProject />;
} else if (selectProj.selectedProjectId === undefined) {
  content = <NoProject />;
}
  return (
    <>
    <Sidebar/>
    {content}
    </>
  );
}
