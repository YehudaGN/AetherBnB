import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    



    render() {
        // debugger
        return (
            <div>
                
                <div>
                    <Link to='/'><h3>AetherBnB</h3></Link>
                </div>
                <div>
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <button onClick={()=> this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Header;
