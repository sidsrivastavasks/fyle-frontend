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
            .get(`https://api.github.com/users/${username}`)
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
                setUserDetails({ ...userDetails, loaded: true });
                console.log("here", error);
            });
    };

    return (
        <>
            {userDetails.loaded ? (
                <>
                    {userDetails.name ? (
                        <>
                            <UserDetailsCard userDetails={userDetails} />
                            <Pagination
                                username={userDetails.userName}
                                repoCount={userDetails.repoCount}
                            />
                        </>
                    ) : (
                        <div className="Error">
                            <h2>
                                User with username - {username} is not present.
                            </h2>
                        </div>
                    )}
                </>
            ) : (
                <div className="Loader">
                    <GridLoader color="#41b5ff" />
                </div>
            )}
        </>
    );
};

export default UserDetails;
