import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props)  
    }

    sessionLinks = () => (
        <ul className='login-signup-ul'>
            <li className="menu-li" onClick={() => this.props.openModal('login')}>Log In</li>
            <li className="menu-li" onClick={() => this.props.openModal('signup')}>Sign Up</li>
        </ul>
    );

    handleClick = () => {

    };

    render() {
        return (
                <div className='header-container'>       
                    <div className='logo'>
                        {/* <Link to='/'></Link>  */}
                    </div >   
                        
                        <div className='menu-container'>
                            <button className='menu-button' onClick={this.handleClick}>☰</button>
                            <div className='dropdown'>
                                {this.props.currentUser ? 
                                <ul className='logout-ul'> <li className="menu-li" onClick={this.props.logout}>Log Out</li></ul>:
                                this.sessionLinks()}
                            </div>
                        </div>
                </div>
        )
    }
}

export default Header;
