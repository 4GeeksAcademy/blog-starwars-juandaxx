import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {

    const { type, id } = useParams();

    const [info, setInfo] = useState(null);

    useEffect(() => {

        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(resp => resp.json())
            .then(data => setInfo(data.result.properties));

    }, []);

    if (!info) return <h1>Loading...</h1>;

    return (

        <div className="container mt-5">

            <h1>{info.name}</h1>

            <hr />

            {
                Object.entries(info).map(([key, value]) => (

                    <p key={key}>
                        <strong>{key}</strong>: {value}
                    </p>

                ))
            }

        </div>
    );
};