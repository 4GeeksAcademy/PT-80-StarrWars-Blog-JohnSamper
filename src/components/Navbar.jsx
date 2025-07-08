import { Link } from "react-router-dom";
import REBELSImgeUrl from '../assets/img/REBELS-2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Home } from "../pages/Home";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../Context/Favoritecontext";

export const Navbar = () => {
    const navigate = useNavigate();
// Function to handle logo click and navigate to the home page
 const { favorites, removeFavorite } = useFavorites();

    const handleLogoClick = () => {
        navigate("/");
    };  
    return (
        <nav className=" Navbar navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
            <div
                className="container-fluid position-relative"
                style={{ minHeight: "60px" }}
            >
                {/* Logo on the left */}
                <div className="align-self-start">
                    <button className=" border-0 bg-transparent navbar-brand mb-2 pt-0" href="#">
                        <img onClick={handleLogoClick} src={REBELSImgeUrl} style={{ width: '200px', height: 'auto' }} alt="Rebels Logo" />
                    </button>
                </div>
                {/* Centered nav links */}
                <div
                    className="d-flex flex-column align-items-center"
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-column align-items-center" id="navbarText">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/planets">Planets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/characters">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/films">Films</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/species">Species</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/starships">Starships</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">Vehicles</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Dropdown on the right */}
                <div className="d-flex align-items-center position-absolute" style={{ right: 15, top: "50%", transform: "translateY(-50%)" }}>
                   <div className="btn-group" role="group">
                        <button type="button" className="btn btn-warning dropdown-toggle m-3" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-jedi fa-2xl"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                        {favorites.length === 0 ? (
                            <li className="dropdown-item text-muted"> I Find Your Lack of Favorites Disturbing </li>
                        ) : (
                            favorites.map((fav, index) => (
                            <li className="dropdown-item d-flex justify-content-between" key={index}>
                                {fav.name}
                                <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeFavorite(fav)}>X</button>
                            </li>
                            ))
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};