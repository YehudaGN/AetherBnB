import React from "react";
import { Link } from "react-router-dom";

const Header = ({currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div>
            <button onClick={() => openModal('login')}>Log In</button>
            <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    );

    return (
            <div>       
                <div>
                    <Link to='/'><h3>AetherBnB</h3></Link>
                </div>
                <div>
                    {currentUser ? 
                    <button className="header-button" onClick={logout}>Log Out</button> :
                    sessionLinks()}
                </div>
            </div>
    )
}

export default Header;
