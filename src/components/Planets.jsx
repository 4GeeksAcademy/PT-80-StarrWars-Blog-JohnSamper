import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "./Card.jsx";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => {
        // Only fetch details for the first 10 planets to avoid rate limiting
        const limitedPlanets = data.results.slice(0, 10);
        return Promise.all(
          limitedPlanets.map((planet) =>
            fetch(planet.url)
              .then((res) => res.json())
              .then((detail) => ({
                name: planet.name,
                uid: planet.uid,
                population: detail.result.properties.population,
                terrain: detail.result.properties.terrain,
              }))
              .catch(() => ({
                name: planet.name,
                uid: planet.uid,
                population: "unknown",
                terrain: "unknown",
              }))
          )
        );
      })
      .then(setPlanets)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4 ">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <a className="navbar-brand px-3 text-white" href="#">
            Planets
          </a>
        </div>
      </nav>
      <div
        className="d-flex gap-3 overflow-auto px-4"
        style={{ width: "auto", overflowX: "auto" }}
      >
        <div className="d-flex flex-nowrap gap-5">
        {planets.map((planet) => (
          <Card
            key={planet.uid}
            name={planet.name}
            population={planet.population}
            terrain={planet.terrain}
          />
        ))}
        </div>
      </div>
    </div>
  );
};