import "./NewProject.css";
import React, { useRef } from "react";
import { useContext } from "react";
import { ProjectContext } from "./store/project";
export default function NewProject() {
  const { cancelProj, addProj } = useContext(ProjectContext);
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleAdd() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = date.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      return;
    }
    addProj({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate,
    });
  }
  return (
    <section style={{ width: "calc(100vw -10)" }}>
      <div className="form">
        <button className="btn btn-muted" onClick={cancelProj}>
          Cancel
        </button>{" "}
        <button className="btn btn-success" onClick={handleAdd}>Save</button>
      </div>
      <hr />
      <div className="form">
        <label htmlFor="">Title</label>
        <input type="text" ref={title} />
      </div>
      <div className="form">
        <label htmlFor="">Description</label>
        <textarea ref={description} />
      </div>
      <div className="form">
        <label htmlFor="">Date</label>
        <input type="date" ref={date} />
      </div>
    </section>
  );
}
