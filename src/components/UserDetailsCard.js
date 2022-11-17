import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UserDetailsCard = (props) => {
    return (
        <div>
            <h2>Sid</h2>
            <p>here - {props.userDetails.name}</p>
        </div>
    );
};

export default UserDetailsCard;
