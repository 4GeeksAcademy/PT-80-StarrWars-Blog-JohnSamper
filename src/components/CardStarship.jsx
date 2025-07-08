
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFavorites } from "../Context/Favoritecontext";

export const CardStarship = ({ name, model, manufacturer, cost_in_credits }) => {
  const { addFavorite } = useFavorites();

  const handleAddToFavorites = () => {
    const item = { name, model, manufacturer, cost_in_credits };
    addFavorite(item);  
  };

  return (
    <div className="card card-bg text-white px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img 
        src="https://cdna.artstation.com/p/assets/images/images/011/440/622/large/stephan-deutsch-xwing-space-blueplanet-open-filmic.jpg?1529591190" 
        className="card-img-top" 
        alt="some image"
      />
      <div className="card-body p-3">
        <div className="bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="card-title text-warning h3">{name}</h5>
          <p>Model: {model}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Cost in Credits: {cost_in_credits}</p>

          <Link to="/Starship" className="btn btn-danger">Learn more</Link>
          <button className="btn btn-warning ms-4" onClick={handleAddToFavorites}>
            <FontAwesomeIcon icon={faJedi} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};