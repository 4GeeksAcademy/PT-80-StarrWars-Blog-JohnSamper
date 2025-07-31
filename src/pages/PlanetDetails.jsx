import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties))
      .catch((err) => console.error("Error fetching planet:", err));
  }, [id]);

  if (!planet) return <p className="text-white">Loading planet...</p>;

  const imageUrl =
    "https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20240118012902";

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
        
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={planet.name}
            className="img-fluid rounded"
            style={{ maxHeight: "450px", objectFit: "cover" }}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
            }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="text-warning mb-3">{planet.name}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Population:</strong> {planet.population}</p>
            <p className="mb-1"><strong>Climate:</strong> {planet.climate}</p>
            <p className="mb-1"><strong>Terrain:</strong> {planet.terrain}</p>
            <p className="mb-1"><strong>Diameter:</strong> {planet.diameter} km</p>
            <p className="mb-1"><strong>Gravity:</strong> {planet.gravity}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Galactic Data</h5>
            <p style={{ margin: 0 }}>
              {planet.name} is a key world within the Star Wars galaxy, boasting a diverse environment and notable galactic relevance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};