import React, { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <span><a href="https://automatic-guacamole-4jwx4756jrx4hqr59-3000.app.github.dev/"><img className="w-25" src="https://imgs.search.brave.com/6JjBSDkaqFqQgqKPIQBTyEVDWFvFpRMED9wlQjtAhiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzEyL3N0YXItd2Fy/cy1sb2dvLTAucG5n" alt="" /></a></span>
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
