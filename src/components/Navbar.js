import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="leftnav">
                    <Link className="button-border button" to="/">Home</Link>
                    <Link className="button-border button" to="/About">About</Link>
                    <Link className="button-border button" to="/Contact">Contact</Link>
                </div>
                <div className="rightnav">
                <Link className="button"to="/Login">Login</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}