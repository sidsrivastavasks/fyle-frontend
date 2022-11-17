import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UserDetailsCard = (props) => {
    return (
        <div className="userContainer">
            <div className="userDetails">
                <div className="top">
                    <img
                        className="profileImage"
                        src={props.userDetails.image}
                    ></img>
                    <div className="detailBox">
                        <h1>{props.userDetails.name}</h1>
                        <p>{props.userDetails.bio}</p>
                        <div className="location">
                            <p>
                                {/* <img src="https://cdn-icons-png.flaticon.com/512/17/17736.png"></img> */}
                                <i className="fa-solid fa-location-dot"></i>
                                {props.userDetails.location}
                            </p>
                        </div>
                        <p>Twitter: {props.userDetails.twitter}</p>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>{" "}
                        {props.userDetails.github}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;
