import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

export default function Navbar() {
    const{user}=useAuth()
    return(
        <>
            <nav className="navbar">
                <div className="leftnav">
                    <Link className="button-border button" to="/Home">Home</Link>
                    <Link className="button-border button" to="/About">About</Link>
                    <Link className="button-border button" to="/Contact">Contact</Link>
                </div>
                <div className="rightnav">
                <Link className="button"to={user===null?'/Login':'/Account'}>{user===null?'Login':'Account'}</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}