import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menuContainer = React.createRef();
    this.state = {
      open: false,
      scrollClass: "header-container-container",
      city: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {this.props.fetchUser(this.props.currentUser)};
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        this.setState({ scrollClass: "on-scroll" });
      } else {
        this.setState({ scrollClass: "header-container-container" });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
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
    <ul className="login-signup-ul">
      <li className="menu-li" onClick={() => this.props.openModal("login")}>
        Log In
      </li>
      <li className="menu-li" onClick={() => this.props.openModal("signup")}>
        Sign Up
      </li>
    </ul>
  );

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange(field) {
    return e => this.setState({ city: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/listings/${this.state.city}`);
    this.setState({ city: "" });
  }
  render() {
    if (this.props.currentUser && !this.props.user) return null;

    let profilePic;
    if (this.props.currentUser && this.props.user.photo) {
      profilePic = <img className='header-profile-pic' src={this.props.user.photo} alt="" />
    } else {
      profilePic = <img className='header-profile-pic' src={window.user_icon} alt="" />
      //  <AccountCircleIcon style={{ fontSize: 30 }} />
    }
    return (
      <div className="bdd">
        <div className={this.state.scrollClass}>
          <div className="header-container">
            <div className="logo">
              <Link className="logo-link" to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="listings-search-container">
              <form className="listings-search" onSubmit={this.handleSubmit}>
                <div className="search-input-container">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search City"
                    value={this.state.city}
                    onChange={this.handleChange("city")}
                  />
                  <button className="search-listings-button">
                    <SearchIcon
                      className="search-icon"
                      style={{ fontSize: 17 }}
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="menu-container" ref={this.menuContainer}>
              <button className="menu-button" onClick={this.handleClick}>
                <MenuIcon className='header-menu-icon' style={{ fontSize: 20 }} />
                {profilePic}
              </button>
              {this.state.open && (
                <div className="dropdown">
                  {this.props.currentUser ? (
                    <div className="dropdown-container">
                      <div className="your-trips-div">
                        <Link className="trips-link" to="/trips">
                          Trips
                        </Link>
                      </div>
                      <div className="account-link-div">
                        <Link
                          className="account-link"
                          to={`/users/show/${this.props.currentUser}`}
                        >
                          Account
                        </Link>
                      </div>
                      <ul className="logout-ul">
                        <li className="menu-li" onClick={this.props.logout}>
                          Log Out
                        </li>
                      </ul>
                    </div>
                  ) : (
                    this.sessionLinks()
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="header-cushion"></div>
      </div>
    );
  }
}

export default Header;
