import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pokemon-list">Pokemon List</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
