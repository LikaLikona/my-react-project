import React from "react";
import NavItem from "./navItem";
import {nav} from "../../../data/nav";


const Header =()=> {
    return (
        <header>
            <nav>
                <ul className="flex">
                    {nav.map((item, index)=>(
                        <NavItem key ={index} item={item} /> 
                    ))}
                </ul>
            </nav>
        </header>
    );
};
export default Header;