import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data.result.properties))
      .catch((err) => console.error("Error fetching film:", err));
  }, [id]);

  if (!film) return <p className="text-white">Loading film...</p>;

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
        
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src="https://i.ebayimg.com/images/g/4QcAAOSwu1VW8EQW/s-l1200.jpg"
            alt={film.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        
        <div className="col-md-7">
          <h2 className="text-warning mb-3">{film.title}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Episode:</strong> {film.episode_id}</p>
            <p className="mb-1"><strong>Director:</strong> {film.director}</p>
            <p className="mb-1"><strong>Producer:</strong> {film.producer}</p>
            <p className="mb-1"><strong>Release Date:</strong> {film.release_date}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Opening Crawl</h5>
            <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
              {film.opening_crawl}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};