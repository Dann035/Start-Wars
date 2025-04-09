import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { fetchAllData, getCharacters } from "../services/services.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "fontawesome";
import Characters from "../components/Main/Characters/Characters.jsx";
import Vehicles from "../components/Main/Vehicles/Vehicles.jsx";
import Species from "../components/Main/Species/Species.jsx";
import Starships from "../components/Main/Starships/Starships.jsx";
import Planets from "../components/Main/Planets/Planets.jsx";
import Films from "../components/Main/Films/Films.jsx";
import Loading from "../components/Loading/Loading.jsx";
import HomeSound from "../assets/music/StarWars-Intro.mp3";


export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    localStorage.setItem("datosGenerales", JSON.stringify(store));
    
    useEffect(() => {
        const audio = new Audio(HomeSound);
        audio.volume = 0.02;
        audio.loop = true;
        audio.play().catch((error) => {
            console.error("Error playing audio:", error);
        });
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);
    useEffect(() => {
        fetchAllData(dispatch);
    }, []);
    return (
        <div className="container text-center">
            {store.loading ? (
                <Loading />
            ) : (
                <>
                    <Films/>
                    <Characters />
                    <Planets/>
					<Species/>
					<Starships/>
					<Vehicles/>
                </>
            )}
        </div>
    );
};
