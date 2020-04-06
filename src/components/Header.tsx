import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
export const Header = () => {
    return (
        <div className="header">
            <div></div>
            <Link to="/" className="header-link">
                MyReads
            </Link>
            <Link to="/search" className="header-link">
                <FaSearch></FaSearch>
            </Link>
        </div>
    );
};
