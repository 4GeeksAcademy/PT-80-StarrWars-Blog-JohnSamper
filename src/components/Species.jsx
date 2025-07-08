import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardSpecies } from "./CardSpecies.jsx";

export const Species = () => {
  const [species, setSpecies] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/species")
      .then((res) => res.json())
      .then((data) => {
        const limitedSpecies = data.results.slice(0, 10);
        return Promise.all(
          limitedSpecies.map(async (item) => {
            try {
              const detailRes = await fetch(item.url);
              const detail = await detailRes.json();
              let homeworldName = "unknown";
              const homeworldUrl = detail.result.properties.homeworld;
              if (homeworldUrl) {
                try {
                  const hwRes = await fetch(homeworldUrl);
                  const hwDetail = await hwRes.json();
                  homeworldName = hwDetail.result?.properties?.name || "unknown";
                } catch {
                  homeworldName = "unknown";
                }
              }
              return {
                name: detail.result.properties.name,
                classification: detail.result.properties.classification,
                average_lifespan: detail.result.properties.average_lifespan,
                homeworld: homeworldName,
                uid: item.uid,
              };
            } catch {
              return {
                name: item.name,
                classification: "unknown",
                average_lifespan: "unknown",
                homeworld: "unknown",
                uid: item.uid,
              };
            }
          })
        );
      })
      .then(setSpecies)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4 ">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <a className="navbar-brand px-3 text-white" href="#">
            Species
          </a>
        </div>
      </nav>
      <div
        className="d-flex gap-3 overflow-auto px-4"
        style={{ width: "auto", overflowX: "auto" }}
      >
        <div className="d-flex flex-nowrap gap-5">
          {species.map((specie) => (
            <CardSpecies
              key={specie.uid}
              name={specie.name}
              classification={specie.classification}
              average_lifespan={specie.average_lifespan}
              homeworld={specie.homeworld}
            />
          ))}
        </div>
      </div>
    </div>
  );
};