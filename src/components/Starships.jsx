import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardStarship } from "./CardStarship.jsx";

export const Starships = () => {
  const [Starships, setStarships] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        const limitedStarships = data.results.slice(0, 10);
        return Promise.all(
          limitedStarships.map((starship) =>
            fetch(starship.url)
              .then((res) => res.json())
              .then((detail) => {
  const props = detail?.result?.properties;
                  return {
                    name: props?.name || "unknown",
                    uid: starship.uid,
                    model: props?.model || "unknown",
                    manufacturer: props?.manufacturer || "unknown",
                    starship_class: props?.starship_class || "unknown",
                    cost_in_credits: props?.cost_in_credits || "unknown",
                  };
                })
              .catch(() => ({
                name: starship.name,
                uid: starship.uid,
                model: "unknown",
                manufacturer: "unknown",
                starship_class: "unknown",
              }))
          )
        );
      })
      .then(setStarships)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4 ">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <a className="navbar-brand px-3 text-white" href="#">
            Starships
          </a>
        </div>
      </nav>
      <div
        className="d-flex gap-3 overflow-auto px-4"
        style={{ width: "auto", overflowX: "auto" }}
      >
        <div className="d-flex flex-nowrap gap-5">
          {Starships.map((starship) => (
            <CardStarship
              key={starship.uid}
              uid={starship.uid}
              name={starship.name}
              model={starship.model}
              manufacturer={starship.manufacturer}
              starship_class={starship.starship_class}
              cost_in_credits={starship.cost_in_credits}
            />
          ))}
        </div>
      </div>
    </div>
  );
};