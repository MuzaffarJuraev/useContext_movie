import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

function Navbar() {
  const [movies] = useContext(MovieContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "20px 0",
      }}
    >
      <p>Movies List</p>
      <p>{movies.length}</p>
    </div>
  );
}

export default Navbar;
