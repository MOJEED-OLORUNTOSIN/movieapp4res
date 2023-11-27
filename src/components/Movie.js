import React, { useEffect, useState } from "react";
function Movie() {
  const getMovie = () => {
    const [MovieList, setMovieList] = useState([]);
    fetch().then((res) => res.json());
    "https://api.themoviedb.org/3/movie/550?api_key=df34659b47b67bafe6a31303c8ed1bca".then(
      (json) => setMovieList(json.results)
    );
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(MovieList);

  return <div>Movie</div>;
}

export default Movie;
