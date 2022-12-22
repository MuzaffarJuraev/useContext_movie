import MovieBody from "./MovieBody";
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";

function MovieComponent() {
  return (
    <div>
      <Navbar />
      <MovieBody />
      <AddMovie />
    </div>
  );
}

export default MovieComponent;
