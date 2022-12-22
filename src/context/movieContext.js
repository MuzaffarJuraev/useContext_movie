import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([
    { id: 1, title: "After Dark in Central Park", year: 1900 },
    { id: 2, title: "Boarding School Girls' Pajama Parade", year: 1900 },
    { id: 4, title: "Buffalo Bill's Wild West Parad", year: 1900 },
    { id: 5, title: "Caught", year: 1900 },
    { id: 6, title: "Clowns Spinning Hats", year: 1900 },
    {
      id: 7,
      title: "Capture of Boer Battery by British",
      year: 1900,
    },
    { id: 8, title: "The Enchanted Drawing", year: 1900 },
    {
      id: 9,
      title: "Feeding Sea Lions",
      year: 1900,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
