import React, { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const CardList = ({ title, data, type }) => {
    const { actions } = useContext(Context);

    return (
        <>
            <h2>{title}</h2>
            <div className="d-flex overflow-auto mb-4">
                {data.map((item, i) => (
                    <div key={i} className="card m-2" style={{ minWidth: "200px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to={`/details/${type}/${item.uid}`} className="btn btn-primary btn-sm me-2">Más info</Link>
                            <button className="btn btn-warning btn-sm" onClick={() => actions.addFavorite(item.name)}>💛</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const Home = () => {
    const { store } = useContext(Context);

    return (
        <>
            <CardList title="Personajes" data={store.people} type="characters" />
            <CardList title="Planetas" data={store.planets} type="planets" />
            <CardList title="Vehículos" data={store.vehicles} type="vehicles" />
        </>
    );
};

export default Home;
