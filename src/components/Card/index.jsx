import { useContext } from "react";
import { PhotosContext } from "../../context/photosContext";

function Card(props) {
  const [data, setData] = useContext(PhotosContext);
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <img src={props.url} alt="" />
      <p>{props.title}</p>
      <button
        onClick={() => setData(data.filter((value) => value.id !== props.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
