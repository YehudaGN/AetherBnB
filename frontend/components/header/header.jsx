import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

class Header extends React.Component {
    constructor(props) {
        super(props);  
        this.menuContainer = React.createRef();
        this.state = {
            open: false,
            scrollClass: 'header-container-container'
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("scroll", ()=> {
            if (window.scrollY > 1) {
                this.setState({scrollClass: "on-scroll"})
            } else {
                this.setState({scrollClass: "header-container-container"}) 
            }

        })
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
            <div className='bgd'>  
                <div className={this.state.scrollClass}>
                    <div className='header-container'>       
                        <div className='logo'>
                            <Link className='logo-link' to='/'> 
                                <img src={logo} alt="" />
                            </Link> 
                        </div >   

                        <div className='listings-search'>
                            <Link className='link-search-text' to='/listings'>Listings</Link>  
                            <SearchIcon className='search-icon'/>
                        </div>
                            
                            <div className='menu-container' ref={this.menuContainer}>
                                <button className='menu-button' onClick={this.handleClick}>
                                    <MenuIcon style={{ fontSize: 30 }}/>
                                    <AccountCircleIcon style={{ fontSize: 30 }}/>
                                </button>
                                {this.state.open && (
                                <div className='dropdown'>
                                    {this.props.currentUser ? 
                                    <div className='dropdown-container'>
                                        <div className='account-link-div'>
                                            <Link className='account-link' to={`/users/show/${this.props.currentUser}`}>Account</Link>
                                        </div>
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
                </div>
                <div className='header-cushion'></div>
            </div>
            
        )
    }
}

export default Header;
