import React, { useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="searchBox">
            <h1>Enter username</h1>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
            />
            <button type="submit" onSubmit={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Home;
