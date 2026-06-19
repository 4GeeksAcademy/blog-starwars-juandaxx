import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterCard = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {

        fetch("https://www.swapi.tech/api/people")
            .then(resp => resp.json())
            .then(data =>
                dispatch({
                    type: "set_people",
                    payload: data.results
                })
            );

    }, []);

    return (

        <div className="scroll-row">

            {
                store.people.map(character => (

                    <div
                        className="card card-starwars"
                        key={character.uid}
                    >

                        <img
                            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVcJMhOegc_N2T6t-achg_lYugDL9OsS07A&s`}
                            className="card-img-top"
                            alt={character.name}
                            onError={(e) => {
                                e.target.src =
                                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }}
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                {character.name}
                            </h5>

                            <div className="d-flex justify-content-between">

                                <Link to={`/details/people/${character.uid}`}>
                                    <button className="btn btn-primary">
                                        Learn more
                                    </button>
                                </Link>

                                <button
                                    className="btn btn-warning"
                                    onClick={() =>
                                        dispatch({
                                            type: "add_favorite",
                                            payload: character.name
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