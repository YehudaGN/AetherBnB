import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let createListingButton;
    if (this.props.currentUserId) {
      createListingButton = (
        <li
          className="create-listing-li"
          onClick={() => this.props.openModal("create listing")}
        >
          Create Listing
        </li>
      );
    } else {
      createListingButton = (
        <li
          className="create-listing-li"
          onClick={() => this.props.openModal("login")}
        >
          Create Listing
        </li>
      );
    }

    return (
      <>
        <div className="splash-container">
          <div>
            <div className="bg-img-container">
              <img className="bg-img" src={splash_bg} alt="Splash BG" />

              <div className="flexible-container">
                <div className="flexible-text-container">
                  <p className="flexible-text">Not sure where to go?</p>
                </div>
                <div className="flexible-button-container">
                  <Link className="flexible-button" to="/listings">
                    I'm flexible
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-container-container">
            <div className="explore-h3-container">
              <h3 className="explore-h3">Explore Places To Stay</h3>
            </div>
            <div className="explore-container">
              <div className="explore-location">
                <Link
                  to={`/listings/New York`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.city_ocean}
                    alt="Location img"
                  />
                  New York
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Anchorage`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.clouds}
                    alt="Location img"
                  />
                  Anchorage
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Philadelphia`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.city_river}
                    alt="Location img"
                  />
                  Philadelphia
                </Link>
              </div>
              <div className="explore-location">
                <Link to={`/listings/Miami`} className="explore-location-text">
                  <img
                    className="location-img"
                    src={window.arch_city}
                    alt="Location img"
                  />
                  Miami
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Arlington`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.tree_city}
                    alt="Location img"
                  />
                  Arlington
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/Virginia Beach`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.city_beach}
                    alt="Location img"
                  />
                  Virginia Beach
                </Link>
              </div>
              <div className="explore-location">
                <Link
                  to={`/listings/San Diego`}
                  className="explore-location-text"
                >
                  <img
                    className="location-img"
                    src={window.warm_city_beach}
                    alt="Location img"
                  />
                  San Diego
                </Link>
              </div>
              <div className="explore-location">
                <Link to={`/listings/Austin`} className="explore-location-text">
                  <img
                    className="location-img"
                    src={window.night_sky}
                    alt="Location img"
                  />
                  Austin
                </Link>
              </div>
            </div>
          </div>
          <div className="try-hosting-container-container">
            <div className="try-hosting-container">
              <div className="try-hosting-img-container">
                <img
                  className="try-hosting-img"
                  src={try_hosting}
                  alt="Location img"
                />
              </div>

              <div className="try-hosting-text-container">
                <h3 className="try-hosting-h3">Try Hosting</h3>
                <p className="try-hosting-text">
                  Earn extra income and unlock new opportunities by sharing your
                  space
                </p>
                {createListingButton}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Splash;
