import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardVehicles } from "./CardVehicles.jsx";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then((data) => {
        const limitedVehicles = data.results.slice(0, 10);
        return Promise.all(
          limitedVehicles.map((vehicle) =>
            fetch(vehicle.url)
              .then((res) => res.json())
              .then((detail) => ({
                name: detail.result.properties.name,
                uid: vehicle.uid,
                model: detail.result.properties.model,
                manufacturer: detail.result.properties.manufacturer,
                vehicle_class: detail.result.properties.vehicle_class,
                cost_in_credits: detail.result.properties.cost_in_credits,
              }))
              .catch(() => ({
                name: vehicle.name,
                uid: vehicle.uid,
                model: "unknown",
                manufacturer: "unknown",
                vehicle_class: "unknown",
              }))
          )
        );
      })
      .then(setVehicles)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 bg-opacity-75 bg-transparent ps-4 ">
      <nav className="navbar navbar-expand-lg bg-dark mb-4">
        <div className="container-fluid p-2">
          <a className="navbar-brand px-3 text-white" href="#">
            Vehicles
          </a>
        </div>
      </nav>
      <div
        className="d-flex gap-3 overflow-auto px-4"
        style={{ width: "auto", overflowX: "auto" }}
      >
        <div className="d-flex flex-nowrap gap-5">
          {vehicles.map((vehicle) => (
            <CardVehicles
              key={vehicle.uid}
              name={vehicle.name}
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              vehicle_class={vehicle.vehicle_class}
              cost_in_credits={vehicle.cost_in_credits || "unknown"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};