import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from "../Context/Favoritecontext";

export const Card = ({ name, population, terrain }) => {
  const { addFavorite } = useFavorites();

  const handleAddToFavorites = () => {
    const item = { name, population, terrain };
    addFavorite(item);
  };

  return (
    <div className="card card-bg text-white px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img
        src="https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20240118012902"
        className="card-img-top"
        alt="some image"
      />
      <div className="card-body p-3">
        <div className="bg-secondary bg-opacity-50 p-3 rounded">
          <h5 className="card-title text-warning h3" style={{ maxWidth: "100%" }}>{name}</h5>
          <p className="card-text" style={{ maxWidth: "100%" }}>Population: {population}</p>
          <p className="card-text" style={{ maxWidth: "100%" }}>Terrain: {terrain}</p>

          <Link to="/Planets" className="btn btn-danger">Learn more</Link>
          <button className="btn btn-warning ms-4" onClick={handleAddToFavorites}>
            <FontAwesomeIcon icon={faJedi} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};