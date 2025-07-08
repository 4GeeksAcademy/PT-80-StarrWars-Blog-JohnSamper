import { useEffect, useState } from "react";
import { CardFilms } from "./CardFilms.jsx";

export const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/films");
        const data = await res.json();

        const filmsArray = Array.isArray(data.result) ? data.result : [];
        if (filmsArray.length === 0) {
          console.warn("No films found.");
          return;
        }

        const detailed = await Promise.all(
          filmsArray.map(async (film) => {
            try {
              const res = await fetch(film.url);
              const detail = await res.json();
              const props = detail.result?.properties;

              return {
                title: props?.title || "Unknown",
                director: props?.director || "Unknown",
                release_date: props?.release_date || "Unknown",
                episode_id: props?.episode_id || "N/A",
                uid: film.uid,
              };
            } catch (err) {
              return {
                title: "Error loading film",
                director: "N/A",
                release_date: "N/A",
                episode_id: "N/A",
                uid: film.uid || Math.random(),
              };
            }
          })
        );

        setFilms(detailed);
      } catch (error) {
        console.error("Main fetch failed:", error);
      }
    };

    loadFilms();
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <span className="navbar-brand px-3 text-white">Films</span>
        </div>
      </nav>

      <div className="d-flex gap-3 overflow-auto px-4" style={{ width: "auto" }}>
        <div className="d-flex flex-nowrap gap-5">
          {films.map((film) => (
            <CardFilms
              key={film.uid}
              title={film.title}
              director={film.director}
              release_date={film.release_date}
              episode_id={film.episode_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};