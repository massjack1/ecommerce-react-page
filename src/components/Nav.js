import React from "react";
import logo from "../img/logo.svg";
import burgermenu from "../components/burgermenu";
//Import Data
import { data } from "../data";


const Nav = () => {
    return (
    <div>
        <a href="#">
        <img src={logo} alt="Sneaker" />
        </a>
        <nav>
        <ul>
            <li>
                <a href="#">Collections</a>
            </li>
            <li>
            <a href="#">Men</a>
            </li>
            <li>
            <a href="#">Women</a>
            </li>
            <li>
            <a href="#">About</a></li>
            <li>
            <a href="#">Contact</a></li>
        </ul>
        </nav>
    </div>
    )
};

export default Nav;