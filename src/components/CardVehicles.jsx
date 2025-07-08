import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFavorites } from "../Context/Favoritecontext";

export const CardVehicles = ({ name, model, manufacturer, cost_in_credits }) => {
  const { addFavorite } = useFavorites();

  const handleAddToFavorites = () => {
    const item = { name, model, manufacturer, cost_in_credits };
    addFavorite(item);
  };

  return (
    <div className="card card-bg text-white px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img 
        src="https://images2.alphacoders.com/664/664399.jpg" 
        className="card-img-top" 
        alt="Vehicle"
      />
      <div className="card-body p-3">
        <div className="bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="card-title text-warning h3" style={{ maxWidth: "100%" }}>{name}</h5>
          <p>Model: {model}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Cost in Credits: {cost_in_credits}</p>

          <Link to="/Vehicles" className="btn btn-danger">Learn more</Link>
          <button className="btn btn-warning ms-4" onClick={handleAddToFavorites}>
            <FontAwesomeIcon icon={faJedi} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};