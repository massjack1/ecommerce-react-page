import React from "react";
import logo from "../img/logo.svg";
import burgermenu from "../components/burgermenu";
//import Images & icons
import avatar from "../img/avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
//Import Data
import { data } from "../data";


const Nav = () => {
    return (
        <>
        <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
    <div className="flex items-center justify-start gap-4">
        <a href="#">
        <img src={logo} alt="Sneaker" />
        </a>
        <nav>
        <ul className="font-light text-slate-500 flex items-center justify-center gap-4 mx-auto">
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
    <div>
        <ul className="flex items-center justify-start gap-4">
            <li> 
                <button>
                    <AiOutlineShoppingCart className="w-20"/>
                </button>
                 </li>
            <li> <img src={avatar} alt="profile photo" className="w-12"/> </li>
        </ul>
    </div>
    </header>
    </>
    
    )
};

export default Nav;