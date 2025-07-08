import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Planets } from "../components/Planets.jsx";
import { Characters } from "../components/Characters.jsx";
import { Films } from "../components/Films.jsx";
import { Species } from "../components/Species.jsx";
import { Starships } from "../components/Starships.jsx";
import { Vehicles } from "../components/Vehicles.jsx";



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


	return (
		<div className=" Home-bg text-center mt-5">
			
			<Planets/>
			<Characters/>
			<Films/>
			<Species/>
			<Starships/>
			<Vehicles/>
		</div>
	);
}; 