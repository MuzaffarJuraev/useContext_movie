import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value) {
      setMovies([
        ...movies,
        {
          title: e.target[0].value,
          year: e.target[1].value,
          id: new Date().getMilliseconds(),
        },
      ]);
      e.target[0].value = "";
      e.target[1].value = "";
    } else {
      window.alert("not completed all inputs");
    }
  };
  return (
    <div
      style={{
        margin: "0 auto",
        width: 200,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form onSubmit={(e) => HandleSubmit(e)}>
        <input placeholder="film name" />
        <input placeholder="published year" />
        <input type={"submit"} value={"Add"} />
      </form>
    </div>
  );
}

export default AddMovie;
