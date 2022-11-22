import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";
import Pagination from "./Paginations";
import GridLoader from "react-spinners/GridLoader";

const RepoComponent = (props) => {
    const { username, pageNumber } = props;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // console.log(pageNumber);
        if (username !== undefined || username !== "") {
            getUserRepo();
        }
    }, [pageNumber]);

    const [userRepo, setUserRepo] = useState([]);
    let axiosConfig = {
        headers: {
            Authorization:
                "Bearer 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",
        },
    };

    const getUserRepo = (e) => {
        axios
            .get(
                `https://api.github.com/users/${username}/repos?per_page=6&page=${pageNumber}`
            )
            .then((response) => {
                const data = response.data;
                setUserRepo(data);
                setLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {loaded ? (
                <div className="repoContainer">
                    <div className="repoGrid">
                        {userRepo.map((repo) => (
                            <RepoCard repo={repo} key={repo.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="Loader">
                    <GridLoader color="#41b5ff" />
                </div>
            )}
        </>
    );
};

export default RepoComponent;
