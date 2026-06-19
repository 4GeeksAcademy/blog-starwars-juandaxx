import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const VehicleCard = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {

        fetch("https://www.swapi.tech/api/vehicles")
            .then(resp => resp.json())
            .then(data =>
                dispatch({
                    type: "set_vehicles",
                    payload: data.results
                })
            );

    }, []);

    return (

        <div className="scroll-row">

            {
                store.vehicles.map(vehicle => (

                    <div
                        className="card card-starwars"
                        key={vehicle.uid}
                    >

                        <img
                            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVcJMhOegc_N2T6t-achg_lYugDL9OsS07A&s`}
                            className="card-img-top"
                            alt={vehicle.name}
                            onError={(e) => {
                                e.target.src =
                                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }}
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                {vehicle.name}
                            </h5>

                            <div className="d-flex justify-content-between">

                                <Link to={`/details/vehicles/${vehicle.uid}`}>
                                    <button className="btn btn-primary">
                                        Learn more
                                    </button>
                                </Link>

                                <button
                                    className="btn btn-warning"
                                    onClick={() =>
                                        dispatch({
                                            type: "add_favorite",
                                            payload: vehicle.name
                                        })
                                    }
                                >
                                    ♥
                                </button>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>

    );
};