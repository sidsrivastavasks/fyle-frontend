import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import UserDetailsCard from "./UserDetailsCard";
import RepoComponent from "./RepoComponent";
import Pagination from "./Paginations";
import GridLoader from "react-spinners/GridLoader";

// import { Link, Navigate, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const username = window.location.href.split("/")[3];
    let axiosConfig = {
        headers: {
            Authorization:
                "Bearer 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",
        },
    };

    useEffect(() => {
        if (username !== undefined || username !== "") {
            getUserDetails();
        }
    }, []);

    const [userDetails, setUserDetails] = useState({
        userName: "",
        name: "",
        bio: "",
        location: "",
        twitter: "",
        github: "",
        image: "",
        loaded: false,
        repoCount: 0,
    });

    const getUserDetails = async (e) => {
        await axios
            .get(`https://api.github.com/users/${username}`, axiosConfig)
            .then(async (response) => {
                console.log(response);
                setUserDetails({
                    userName: response.data.login,
                    name: response.data.name,
                    bio: response.data.bio || "No bio available",
                    location: response.data.location || "No location available",
                    twitter: response.data.twitter_username || "unavailable",
                    github: response.data.html_url,
                    image: response.data.avatar_url,
                    loaded: true,
                    repoCount: response.data.public_repos,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {userDetails.loaded ? (
                <>
                    {userDetails.userName ? (
                        <>
                            <UserDetailsCard userDetails={userDetails} />
                            <Pagination
                                username={userDetails.userName}
                                repoCount={userDetails.repoCount}
                            />
                        </>
                    ) : (
                        "Wrong"
                    )}
                </>
            ) : (
                <div className="Loader">
                    <GridLoader color="#36d7b7" />
                </div>
            )}
        </div>
    );
};

export default UserDetails;
