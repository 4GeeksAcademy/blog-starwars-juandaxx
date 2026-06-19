import { CharacterCard } from "../components/CharacterCard";
import { PlanetCard } from "../components/PlanetCard";
import { VehicleCard } from "../components/VehicleCard";

export const Home = () => {
    return (

        <div className="container">

            <h1 className="text-danger mt-4">
                Characters
            </h1>

            <CharacterCard />

            <h1 className="text-danger mt-5">
                Planets
            </h1>

            <PlanetCard />

            <h1 className="text-danger mt-5">
                Vehicles
            </h1>

            <VehicleCard />

        </div>
    );
};