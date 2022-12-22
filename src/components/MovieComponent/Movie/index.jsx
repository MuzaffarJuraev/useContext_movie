import { useContext, useState } from "react";
import { MovieContext } from "../../../context/movieContext";

function Movie(props) {
  const [movies, setMovies] = useContext(MovieContext);
  const [isEdit, setIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputYear, setInputYear] = useState("");
  const EditMovieHandler = (id) => {
    setMovies(
      movies.map((value) =>
        value.id === id ? { title: inputTitle, year: inputYear, id } : value
      )
    );
    setInputTitle("");
    setInputYear("");
    setIsEdit(false);
  };
  return (
    <div style={{ margin: 10, border: "1px solid black" }}>
      <p>
        {isEdit ? (
          <input onChange={(e) => setInputTitle(e.target.value)} />
        ) : (
          props.title
        )}
      </p>
      <p>
        {isEdit ? (
          <input onChange={(e) => setInputYear(e.target.value)} />
        ) : (
          props.year
        )}
      </p>
      <div>
        <button
          onClick={() => {
            isEdit ? EditMovieHandler(props.id) : setIsEdit(true);
          }}
        >
          {isEdit ? "save" : "edit"}
        </button>
        <button
          onClick={() =>
            setMovies(movies.filter((value) => value.id !== props.id))
          }
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Movie;
