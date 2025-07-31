import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SpeciesDetails = () => {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/species/${id}`)
      .then((res) => res.json())
      .then((data) => setSpecies(data.result.properties))
      .catch((err) => console.error("Error fetching species:", err));
  }, [id]);

  if (!species) return <p className="text-white">Loading species...</p>;

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src="https://ew.com/thmb/mWHd9Y7nx8lnABJz2SPTugiayfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/battle-droids-2000-01242b7f778446af8a7facd2432df426.jpg"
            alt="species"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="text-warning mb-3">{species.name}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Classification:</strong> {species.classification}</p>
            <p className="mb-1"><strong>Average Lifespan:</strong> {species.average_lifespan}</p>
            <p className="mb-1"><strong>Language:</strong> {species.language}</p>
            <p className="mb-1"><strong>Eye Colors:</strong> {species.eye_colors}</p>
            <p className="mb-1"><strong>Skin Colors:</strong> {species.skin_colors}</p>
            <p className="mb-1"><strong>Hair Colors:</strong> {species.hair_colors}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Force Stats</h5>
            <ul className="mb-0">
              <li><strong>Designation:</strong> {species.designation}</li>
              <li><strong>Average Height:</strong> {species.average_height} cm</li>
              <li><strong>Homeworld:</strong> {species.homeworld || "Unknown"}</li>
              <li><strong>People Count:</strong> {species.people?.length || "Unknown"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};