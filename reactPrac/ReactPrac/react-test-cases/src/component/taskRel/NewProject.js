import "./NewProject.css";
import React, { useRef } from "react";
export default function NewProject({ onCancel,onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleAdd() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = date.current.value;
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate,
    });
  }
  return (
    <section style={{ width: "calc(100vw -10)" }}>
      <div className="form">
        <button onClick={onCancel}>Cancel</button> <button onClick={handleAdd}>Save</button>
      </div>
      <hr />
      <div className="form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={title} />
      </div>
      <div className="form">
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={description} />
      </div>
      <div className="form">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref={date} />
      </div>
    </section>
  );
}
