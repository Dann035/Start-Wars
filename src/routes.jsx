// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
{/* <Route path="/characterDetails/:idCharacter" element={<CharacterDetail />} />
<Route path="/filmsDetails/:idFilms" element={<FilmsDetail />} />
<Route path="/planetsDetails/:idPlanets" element={<PlanetsDetails />} />
<Route path="/speciesDetails/:idSpecies" element={<SpeciesDetails />} />
<Route path="/starshipsDetails/:idStarships" element={<StarshipsDetails />} />
<Route path="/vehiclesDetails/:idVehicles" element={<VehiclesDetails />} /> */}
import Login from "./pages/Login/Login";
import { CharactersDetails } from "../src/pages/Details/CharactersDetails.jsx";
import PlanetsDetails from "./pages/Details/PlanetsDetails";
import SpeciesDetails from "./pages/Details/SpeciesDetails";
import StarshipsDetails from "./pages/Details/StarshipsDetails";
import VehiclesDetails from "./pages/Details/VehiclesDetails";
import FilmsDetails from "./pages/Details/FilmsDetails.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        // CreateRoutesFromElements function allows you to build route elements declaratively.
        // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
        // Root, on the contrary, create a sister Route, if you have doubts, try it!
        // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
        // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

        // Root Route: All navigation will start from here.
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/characterDetails/:idCharacter" element={<CharactersDetails />} />
            <Route path="/planetsDetails/:idPlanets" element={<PlanetsDetails />} />
            <Route path="/speciesDetails/:idSpecies" element={<SpeciesDetails />} />
            <Route path="/starshipsDetails/:idStarships" element={<StarshipsDetails />} />
            <Route path="/vehiclesDetails/:idVehicles" element={<VehiclesDetails />} />
            <Route path="/filmsDetails/:idFilms" element={<FilmsDetails />} />
        </Route>
    ),
    {
        future: {
            v7_startTransition: true,
        },
    }
);
