import React, { useEffect, useState } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

const RepoCard = (props) => {
    const [language, setLanguage] = useState({});
    const [loaded, setLoad] = useState(false);
    let axiosConfig = {
        headers: {
            Authorization:
                "Bearer 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",
        },
    };

    useEffect(() => {
        if (props.repo.name !== undefined && props.repo.name !== "") {
            getLanguage();
        }
    }, []);

    const getLanguage = (e) => {
        axios
            .get(`${props.repo.languages_url}`)
            .then(async (response) => {
                const data = response.data;
                setLanguage(data);
                setLoad(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="card" key={props.repo.id}>
            <h2>{props.repo.name}</h2>
            <p>{props.repo.description}</p>
            {loaded ? (
                <div className="languageBox">
                    {Object.keys(language).map((value, index) => {
                        return (
                            <div className="language" key={index}>
                                {value}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <ScaleLoader color="#41b5ff" />
            )}
        </div>
    );
};

export default RepoCard;
