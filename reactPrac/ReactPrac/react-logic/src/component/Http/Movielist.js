export default function Movielist(props) {
  return (
    <div>
      <h1 className="text-primary mt-4">MovieList</h1>
      {props.movie.map((mov) => (
        <div className="card mb-3" key={mov.id}>
          <div className="card-body">
            <h3>{mov.title}</h3>
            <p>{mov.opening_crawl}</p>
            <button className="btn btn-outline-secondary" onClick={()=>props.onRemove(mov.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
