import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StarshipDetails = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${id}`)
      .then((res) => res.json())
      .then((data) => setStarship(data.result.properties))
      .catch((err) => console.error("Error fetching starship:", err));
  }, [id]);

  if (!starship) return <p className="text-white">Loading starship...</p>;

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/011/440/622/large/stephan-deutsch-xwing-space-blueplanet-open-filmic.jpg?1529591190"
            alt="starship"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="text-warning mb-3">{starship.name}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Model:</strong> {starship.model}</p>
            <p className="mb-1"><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p className="mb-1"><strong>Class:</strong> {starship.starship_class}</p>
            <p className="mb-1"><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Force Stats</h5>
            <ul className="mb-0">
              <li><strong>Length:</strong> {starship.length}</li>
              <li><strong>Crew:</strong> {starship.crew}</li>
              <li><strong>Passengers:</strong> {starship.passengers}</li>
              <li><strong>Speed:</strong> {starship.max_atmosphering_speed}</li>
              <li><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</li>
              <li><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};