import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    



    render() {
        let buttons;
        // debugger
        if(this.props.currentUser) {
            buttons = <button onClick={()=> this.props.logout()}>Logout</button>
        } else {
            buttons = (
                <>
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </>
            )
        }
        return (
            <div>
                
                <div>
                    <Link to='/'><h3>AetherBnB</h3></Link>
                </div>
                <div>
                    {buttons}
                </div>
            </div>
        )
    }
}

export default Header;
