import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);  
        this.menuContainer = React.createRef();
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
          this.menuContainer.current &&
          !this.menuContainer.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };

    sessionLinks = () => (
        <ul className='login-signup-ul'>
            <li className="menu-li" onClick={() => this.props.openModal('login')}>Log In</li>
            <li className="menu-li" onClick={() => this.props.openModal('signup')}>Sign Up</li>
        </ul>
    );

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        return (
                <div className='header-container'>       
                    <div className='logo'>
                        <Link className='logo-link' to='/'> 
                            <img src={logo} alt="" />
                        </Link> 
                    </div >   
                        
                        <div className='menu-container' ref={this.menuContainer}>
                            <button className='menu-button' onClick={this.handleClick}>
                                <MenuIcon style={{ fontSize: 30 }}/>
                                <AccountCircleIcon style={{ fontSize: 30 }}/>
                            </button>
                            {this.state.open && (
                            <div className='dropdown'>
                                {this.props.currentUser ? 
                                <div>
                                    <Link to={`/users/show/${this.props.currentUser}`}>Account</Link>
                                    <ul className='logout-ul'> 
                                        <li className="menu-li" onClick={this.props.logout}>Log Out</li>
                                    </ul>
                                </div>
                                :
                                this.sessionLinks()}
                            </div>
                            )}
                        </div>
                </div>
        )
    }
}

export default Header;
