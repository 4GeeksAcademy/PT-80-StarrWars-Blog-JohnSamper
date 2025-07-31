import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data.result.properties))
      .catch((err) => console.error("Error fetching vehicle:", err));
  }, [id]);

  if (!vehicle) return <p className="text-white">Loading vehicle...</p>;

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src="https://images2.alphacoders.com/664/664399.jpg"
            alt="vehicle"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>


        <div className="col-md-7">
          <h2 className="text-warning mb-3">{vehicle.name}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Model:</strong> {vehicle.model}</p>
            <p className="mb-1"><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
            <p className="mb-1"><strong>Class:</strong> {vehicle.vehicle_class}</p>
            <p className="mb-1"><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Force Stats</h5>
            <ul className="mb-0">
              <li><strong>Length:</strong> {vehicle.length}</li>
              <li><strong>Crew:</strong> {vehicle.crew}</li>
              <li><strong>Passengers:</strong> {vehicle.passengers}</li>
              <li><strong>Speed:</strong> {vehicle.max_atmosphering_speed}</li>
              <li><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};