import { useState } from "react";
export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function fetchApi() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-prac-5b5b4-default-rtdb.firebaseio.com/movie.json"
      );
      if (!response.ok) {
        throw Error("something went wrong");
      }
      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          opening_crawl: data[key].opening_crawl,
        });
      }

      setMovie(loadedMovies);
      setError(null);
    } catch (error) {
      setError({ message: error.message });
    }

    setLoading(false);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={fetchApi}>
        Fetch Movie
      </button>
      {error && <div className="text-danger">{error.message}</div>}
      {isLoading && <p>Loading data...</p>}
      {movie.length > 0 && <ul>{movie.map((mov) => (
        <li className="card mb-3" key={mov.id}>
          <div className="card-body">
            <h3>{mov.title}</h3>
            <p>{mov.opening_crawl}</p>
          </div>
        </li>
      ))}</ul>}
    </div>
  );
}
