import Movielist from "./Movielist";
import MovieFrom from "./MovieForm";
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
  const addData = async (movie) => {
    const response = await fetch(
      "https://react-prac-5b5b4-default-rtdb.firebaseio.com/movie.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const postData = await response.json();
    //console.log(postData)
    await fetchApi();
  };
  const removeHandler = async (id) => {
    const response = await fetch(
      `https://react-prac-5b5b4-default-rtdb.firebaseio.com/movie/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const deleteData = await response.json();
    await fetchApi();
  };
  return (
    <div>
      <MovieFrom addData={addData} />
      <hr />
      <button className="btn btn-primary" onClick={fetchApi}>
        Fetch Movie
      </button>
      {error && <div className="text-danger">{error.message}</div>}
      {isLoading && <p>Loading data...</p>}
      {movie.length > 0 && <Movielist movie={movie} onRemove={removeHandler} />}
    </div>
  );
}
