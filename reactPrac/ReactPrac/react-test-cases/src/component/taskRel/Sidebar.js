import "./Sidebar.css";
export default function Sidebar({ onCreate, projects, onSelect }) {
  const side = {
    backgroundColor: "lightgrey",
    width: "20vw",
    padding: "0px 0px 0px",
    height: "100vh",
    float: "left",
  };

  return (
    <aside style={side}>
      <h2>Create project</h2>
      <button onClick={onCreate}>Add project</button>
      <ul className="select">
        {projects.length > 0 &&
          projects.map((project) => (
            <li key={project.id} onClick={() => onSelect(project.id)}>
              {project.title}
            </li>
          ))}
      </ul>
    </aside>
  );
}
