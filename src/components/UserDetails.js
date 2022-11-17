import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailsCard from "./UserDetailsCard";
// import { Link, Navigate, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const username = window.location.href.split("/")[3];

    useEffect(() => {
        if (username !== undefined || username !== "") {
            getUserDetails();
        }
    });

    const [userDetails, setUserDetails] = useState({
        userName: "sidsrivastavasks",
        name: "Siddhant Srivastava",
        bio: "",
        location: "",
        twitter: "",
        github: "",
        image: "",
        loaded: false,
        repoCount: 0,
    });

    const getUserDetails = (e) => {
        axios
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
                console.log(error);
            });
    };

    return (
        <div>
            {!userDetails.loaded ? (
                <>
                    {" "}
                    {userDetails.userName ? (
                        <UserDetailsCard userDetails={userDetails} />
                    ) : (
                        "Wrong"
                    )}
                </>
            ) : (
                "Loading...."
            )}
        </div>
    );
};

export default UserDetails;
