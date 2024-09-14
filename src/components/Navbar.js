import React from "react";
import { Outlet, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function Navbar() {
    const auth = getAuth();
    return(
        <>
            <nav className="navbar">
                <div className="leftnav">
                    <Link className="button-border button" to="/Home">Home</Link>
                    <Link className="button-border button" to="/About">About</Link>
                    <Link className="button-border button" to="/Contact">Contact</Link>
                </div>
                <div className="rightnav">
                <Link className="button"to={auth.currentUser===null?'/Login':'/Account'}>{auth.currentUser===null?'Login':'Account'}</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}