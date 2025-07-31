import { useFavorites } from "../Context/Favoritecontext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const CardSpecies = ({ name, classification, average_lifespan, homeworld , uid }) => {
  const { addFavorite } = useFavorites();

  const handleAddToFavorites = () => {
    const item = { name, classification, average_lifespan, homeworld };
    addFavorite(item);
  };

  return (
    <div className="card card-bg text-white px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img 
        src="https://ew.com/thmb/mWHd9Y7nx8lnABJz2SPTugiayfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/battle-droids-2000-01242b7f778446af8a7facd2432df426.jpg" 
        className="card-img-top" 
        alt="some image" 
      />
      <div className="card-body p-3">
        <div className="bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="card-title text-warning h3">{name}</h5>
          <p>Classification: {classification}</p>
          <p>Lifespan: {average_lifespan}</p>
          <p>Home World: {homeworld}</p>

          <Link to={`/species/${uid}`} className="btn btn-danger">Learn more</Link>

          <button className="btn btn-warning ms-4" onClick={handleAddToFavorites}>
            <FontAwesomeIcon icon={faJedi} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};