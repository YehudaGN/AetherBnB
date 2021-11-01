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
    if (this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser);
    }
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

  handleChange() {
    return e => this.setState({ city: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.city === "") {
      this.props.history.push("/listings");
    } else {
      let city = this.state.city
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      this.props.history.push(`/listings/${city}`);
      this.setState({ city: "" });
    }
  }
  render() {
    if (this.props.currentUser && !this.props.user) return null;
    let profilePic;
    if (this.props.currentUser && this.props.user.photo) {
      profilePic = this.props.user.photo;
    } else {
      profilePic = window.user_icon;
    }
    return (
      <div className="bdd">
        <div className={this.state.scrollClass}>
          <div className="header-container">
            <div className="logo">
              <Link className="logo-link" to="/">
                <img src={logo} alt="Logo" />
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
                    onChange={this.handleChange()}
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
                <MenuIcon
                  className="header-menu-icon"
                  style={{ fontSize: 20 }}
                />
                <img
                  className="header-profile-pic"
                  src={profilePic}
                  alt="Profile pic"
                />
              </button>
              {this.state.open && (
                <div className="dropdown">
                  {this.props.currentUser ? (
                    <div className="dropdown-container">
                      <div className="your-trips-div">
                        <Link
                          className="trips-link"
                          to="/trips"
                          onClick={() => this.setState({ open: false })}
                        >
                          Trips
                        </Link>
                      </div>

                      <div className="account-link-div">
                        <Link
                          className="account-link"
                          to={`/users/show/${this.props.currentUser}`}
                          onClick={() => this.setState({ open: false })}
                        >
                          Account
                        </Link>
                      </div>
                      <ul className="logout-ul">
                        <li
                          className="menu-li"
                          onClick={() => {
                            this.props.logout();
                            this.setState({ open: false });
                          }}
                        >
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
