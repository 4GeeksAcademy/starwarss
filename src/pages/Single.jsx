import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../hooks/useGlobalReducer";

const Single = () => {
    const { type, uid } = useParams();
    const { store, actions } = useContext(Context);
    const item = store.currentItem;

    useEffect(() => {
        actions.getDetails(`https://www.swapi.tech/api/${type}/${uid}`);
    }, [uid]);

    return (
        <div className="text-center">
            {item ? (
                <>
                    <h1>{item.properties.name}</h1>
                    <img className="my-3" src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${uid}.jpg`} />
                    <p className="lead">{item.description}</p>
                    <ul className="list-group">
                        {Object.entries(item.properties).map(([key, value]) => (
                            <li key={key} className="list-group-item">
                                <strong>{key}</strong>: {value}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Single;
