// import { useState } from "react";
// import Greet from './component/Greet'
import React, { useState } from "react";
import Sidebar from "./component/taskRel/Sidebar";
import NoProject from "./component/taskRel/NoProject";
import NewProject from "./component/taskRel/NewProject";
import SelectedProj from "./component/taskRel/SelectedProj";
import CounterContextProvider from "./component/CounterContext";
import Counter from './component/Counter'
import Movie from './component/Movie'
function App() {
  // const [data, setData] = useState("enter data");
  // const fruits = ["Apples", "Orange", "Carrot", "Peach", "Kiwi"];
  // const handleClick = () => {
  //   setData("Hello click this");
  // };
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
      //console.log(newProject)
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
  let selectedProject = selectProj.projects.find(
    (proj) => proj.id === selectProj.selectedProjectId
  );
  let content = (
    <SelectedProj
      project={selectedProject}
      onCancel={cancelProj}
      onDelete={deleteproj}
      addTask={handleTask}
      deleteTask={handleDelete}
      task={selectProj.task}
    />
  );
  if (selectProj.selectedProjectId === null) {
    content = <NewProject onCancel={cancelProj} onAdd={addProj} />;
  } else if (selectProj.selectedProjectId === undefined) {
    content = <NoProject onCreate={createProj} />;
  }
  return (
    // <div style={{ padding: "12px" }}>
    //   <Greet name="create greet name"/>
    //   <h1>learn test cases</h1>
    //   <h2 title="hello">hello there</h2>
    //   <h3>Hello wow</h3>
    //   <h4 id="custom-v">Hello there sdfd</h4>
    //   {/* <h4 data-testid="custom-v">Hello there! Hi react</h4> */}
    //   <img
    //     src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
    //     alt="flower_image"
    //   />
    //   <div>
    //     <button onClick={handleClick}>Click</button>
    //   </div>
    //   {data}
    //   <div>
    //     <label htmlFor="data">Data</label>
    //     <input
    //       type="text"
    //       id="data"
    //       name="data"
    //       value={data}
    //       onChange={(e) => setData(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="firstname" placeholder="please enter name">
    //       Firstname
    //     </label>
    //     <input type="text" id="firstname" />
    //   </div>
    //   <select>
    //     {fruits.map((v, i) => (
    //       <option value={v} key={i}>
    //         {v}
    //       </option>
    //     ))}
    //   </select>
    //   <input type="checkbox" name="" id="" defaultChecked={true} />
    //   Checkbox
    // </div>
    <div className="App">
      <Sidebar
        onCreate={createProj}
        projects={selectProj.projects}
        onSelect={selected}
      />
      {content}
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
      <div><Movie/></div>
    </div>
  );
}

export default App;
