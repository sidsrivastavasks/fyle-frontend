import React from "react";
import { IoMdLink, IoIosPin } from "react-icons/io";

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
                            <IoIosPin />
                            <p> {props.userDetails.location}</p>
                        </div>
                        <p>
                            Twitter:
                            <a href={props.userDetails.twitter}>
                                {props.userDetails.twitter}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <IoMdLink style={{ width: "25px", height: "25px" }} />
                    <a href={props.userDetails.github}>
                        {props.userDetails.github}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;
