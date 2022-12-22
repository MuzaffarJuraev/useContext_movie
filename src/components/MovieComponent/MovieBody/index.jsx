import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";
import Movie from "../Movie";
function MovieBody() {
  const [movies] = useContext(MovieContext);
  return (
    <div style={{ width: "220px", margin: "0 auto" }}>
      {movies.map((value) => (
        <Movie key={value.id} {...value} />
      ))}
    </div>
  );
}

export default MovieBody;
