import React from "react";
import { Link } from "react-router-dom";

const Header = ({currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div className='login-signup'>
            <button onClick={() => openModal('login')}>Log In</button>
            <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    );

    return (
            <div className='header-container'>       
                <div className='logo'>
                    {/* <Link to='/'></Link>  */}
                </div>   
                    {currentUser ? 
                    <div className='logout'><button className="header-button" onClick={logout}>Log Out</button></div> :
                    sessionLinks()}
            </div>
    )
}

export default Header;
