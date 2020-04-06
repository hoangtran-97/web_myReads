import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
export const Header = () => {
    return (
        <div className="header">
            <div></div>
            <h1>MyReads</h1>
            <Link to="/search" className="nav-link">
                <FaSearch className="icons"></FaSearch>
            </Link>
        </div>
    );
};
