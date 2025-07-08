import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardCharacters } from "./CardCharacters.jsx"; // <-- Import your card

export const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        // Only fetch details for the first 10 planets to avoid rate limiting
        const limitedcharacters = data.results.slice(0, 10);
        return Promise.all(
          limitedcharacters.map((character) =>
            fetch(character.url)
              .then((res) => res.json())
              .then((detail) => ({
                name: character.name,
                uid: character.uid,
                height: detail.result.properties.height,
                gender: detail.result.properties.gender,
                birth_year: detail.result.properties.birth_year,
              }))
              .catch(() => ({
                name: character.name,
                uid: character.uid,
                height: "unknown",
                gender: "unknown",
                birth_year: "unknown",
              }))
          )
        );
      })
      .then(setCharacters)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4 ">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <a className="navbar-brand px-3 text-white" href="#">
            Characters
          </a>
        </div>
      </nav>
      <div
        className="d-flex gap-3 overflow-auto px-4"
        style={{ width: "auto", overflowX: "auto" }}
      >
        <div className="d-flex flex-nowrap gap-5">
          {Characters.map((characters) => (
            <CardCharacters
              key={characters.uid}
              name={characters.name}
              height={characters.height}
              gender={characters.gender}
              birth_year={characters.birth_year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};