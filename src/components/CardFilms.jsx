import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  
import { useFavorites } from '../Context/Favoritecontext';

export const CardFilms = ({ title, director, release_date, episode_id }) => {
  const { addFavorite } = useFavorites();

  const handleAddToFavorites = () => {
    const item = { title, director, release_date, episode_id };
    addFavorite(item);
  };

  return (
    <div className="card card-bg text-white px-3" style={{ width: "27rem", overflow: "hidden" }}>
      <img 
        src="https://i.ebayimg.com/images/g/4QcAAOSwu1VW8EQW/s-l1200.jpg"
        className="card-img-top" 
        alt="film poster"
      />
      <div className="card-body p-3">
        <div className="bg-dark bg-opacity-50 p-3 rounded">
          <h5 className="card-title text-warning h3">{title}</h5>
          <p>Episode: {episode_id}</p>
          <p>Director: {director}</p>
          <p>Release Date: {release_date}</p>

          <Link to="/Films" className="btn btn-danger">Learn more</Link>
          <button className="btn btn-warning ms-4" onClick={handleAddToFavorites}>
            <FontAwesomeIcon icon={faJedi} size="lg" />
          </button>
        </div>
      </div>
    </div> 
  );
};