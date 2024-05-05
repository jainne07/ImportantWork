export default function NoProject({onCreate}) {
  return (
   <section style={{ width: "calc(100vw -10)" }}>
        <p>No project yet created</p>
        <button onClick={onCreate}>Create project</button>
     </section>
    );
}
