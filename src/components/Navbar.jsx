import React, { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <span className="navbar-brand mb-0 h1 text-warning">StarWars</span>
            <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Favoritos ({store.favorites.length})
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.map((fav, i) => (
                        <li key={i} className="dropdown-item d-flex justify-content-between align-items-center">
                            {fav}
                            <button className="btn btn-sm btn-danger" onClick={() => actions.removeFavorite(fav)}>❌</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
