// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Planets } from "./components/Planets";
import { Card } from "./components/Card";
import { CardCharacters } from "./components/CardCharacters";   
import { Characters } from "./components/Characters";
import { Films } from "./components/Films";
import { CardFilms } from "./components/CardFilms"; // Import the CardFilms component
import { Species } from "./components/Species"; // Import the Species component
import { CardSpecies } from "./components/CardSpecies"; // Import the CardSpecies component
import { CardStarship } from "./components/CardStarship"; // Import the CardStarship component
import {Starships} from "./components/Starships"; // Import the Starships component
import { CardVehicles } from "./components/CardVehicles"; // Import the CardVehicles component
import {  Vehicles } from "./components/Vehicles"; // Import the Vehicles component

export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/card" element={<Card />} /> 
        <Route path="/cardcharacters" element={<CardCharacters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/cardfilms" element={<CardFilms />} />
        <Route path="/species" element={<Species />} />
        <Route path="/cardspecies" element={<CardSpecies />} />
        <Route path="/cardstarship" element={<CardStarship />} />
        <Route path="/starships" element={<Starships />} /> 
        <Route path="/cardvehicles" element={<CardVehicles />} />
        <Route path="/vehicles" element={<Vehicles />} />

      </Route>
    )
);