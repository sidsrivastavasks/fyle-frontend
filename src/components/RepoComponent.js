import React, { useEffect, useState } from "react";
import axios from "axios";

const RepoComponent = (props) => {
    const { username } = props;
    const [userRepo, setUserRepo] = useState([]);

    useEffect(() => {
        if (username !== undefined || username !== "") {
            getUserRepo();
        }
    }, []);

    const getUserRepo = async (e) => {
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(async (response) => {
                console.log(response.data);
                const data = response.data;
                await setUserRepo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {userRepo.map((repo) => (
                <h4>{repo.name}</h4>
            ))}
        </div>
    );
};

export default RepoComponent;
