import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();

    return (

        <nav className="navbar navbar-light bg-light">

            <div className="container">

                <h3>STAR WARS</h3>

                <div className="dropdown">

                    <button
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Favorites {store.favorites.length}
                    </button>

                    <ul className="dropdown-menu">

                        {
                            store.favorites.map((item, index) => (

                                <li
                                    key={index}
                                    className="dropdown-item d-flex justify-content-between"
                                >

                                    {item}

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() =>
                                            dispatch({
                                                type: "remove_favorite",
                                                payload: item
                                            })
                                        }
                                    >
                                        x
                                    </button>

                                </li>

                            ))
                        }

                    </ul>

                </div>

            </div>

        </nav>

    );
};