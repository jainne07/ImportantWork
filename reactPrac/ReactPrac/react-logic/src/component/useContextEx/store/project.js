import { createContext,useState } from "react";
export const ProjectContext=createContext({
    selectProj: {
      selectedProjectId: undefined,
      projects: [],
      task: []
    },
    createProj:()=>{},
    cancelProj:()=>{},
    addProj:()=>{},
    selectedProj: ()=>{},
    deleteProj:()=>{},
    createTask:()=>{},
    deleteTask: ()=>{},
    
})
export default function ProjectContextProvider({children}){
    const [selectProj, SetSelectProj] = useState({
        selectedProjectId: undefined,
        projects: [],
        task: []
      });
      function createProj() {
        SetSelectProj((prevState) => {
          return { ...prevState, selectedProjectId: null };
        });
      }
      function cancelProj() {
        SetSelectProj((prevState) => {
          return { ...prevState, selectedProjectId: undefined };
        });
      }
      function selected(id) {
        SetSelectProj((prevState) => {
          return { ...prevState, selectedProjectId: id };
        });
      }
      function handleDelete(id) {
        SetSelectProj((prevState) => {
          return {
            ...prevState,
            task: selectProj.task.filter(
              (task) => task.id !== id
            ),
          };
        });
      }
      function deleteproj() {
        SetSelectProj((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: selectProj.projects.filter(
              (project) => project.id !== selectProj.selectedProjectId
            ),
          };
        });
      }
      function addProj(newProj) {
        SetSelectProj((prevState) => {
          const projectId = Math.random();
          const newProject = {
            ...newProj,
            id: projectId,
          };
    
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: [...prevState.projects, newProject],
          };
        });
      }
      function handleTask(newTask) {
        SetSelectProj((prevState) => {
          const id = Math.random();
          const newTasks = {
            ...newTask,
            projectId: selectProj.selectedProjectId,
            id: id,
          };
    
          return {
            ...prevState,
            task: [...prevState.task, newTasks],
          };
        });
      }
      const proValue = {
        selectProj: selectProj ,
        createProj:createProj,
        cancelProj:cancelProj,
        addProj: addProj,
        selectedProj: selected,
        deleteProj: deleteproj,
        createTask:handleTask,
        deleteTask:handleDelete,
      };
    
      return(
      <ProjectContext.Provider value={proValue}>
        {children}
      </ProjectContext.Provider>
      )
}
