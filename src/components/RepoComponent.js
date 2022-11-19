import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";

const RepoComponent = (props) => {
    const { username } = props;
    const [userRepo, setUserRepo] = useState([]);
    let axiosConfig = {
        headers: {
            Authorization:
                "Bearer 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",
        },
    };

    useEffect(() => {
        if (username !== undefined || username !== "") {
            getUserRepo();
        }
    }, []);

    const getUserRepo = (e) => {
        axios
            .get(`https://api.github.com/users/${username}/repos`, axiosConfig)
            .then(async (response) => {
                const data = response.data;
                await setUserRepo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="repoContainer">
            <div className="repoGrid">
                {userRepo.map((repo) => (
                    <RepoCard repo={repo} key={repo.id} />
                ))}
            </div>
        </div>
    );
};

export default RepoComponent;
