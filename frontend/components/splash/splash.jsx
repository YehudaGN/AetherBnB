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
              <img className="bg-img" src={splash_bg} alt="" height="750" />
            </div>
          </div>
          <div className="explore-container-container">
            <div className="explore-h3-container">
              <h3 className="explore-h3">Explore Places To Stay</h3>
            </div>
            <div className="explore-container">
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/New York`}
                  className="explore-location-text"
                >
                  New York
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/Anchorage`}
                  className="explore-location-text"
                >
                  Anchorage
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/Philadelphia`}
                  className="explore-location-text"
                >
                  Philadelphia
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link to={`/listings/Boston`} className="explore-location-text">
                  Boston
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/Arlington`}
                  className="explore-location-text"
                >
                  Arlington
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/Virginia Beach`}
                  className="explore-location-text"
                >
                  Virginia Beach
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link
                  to={`/listings/San Diego`}
                  className="explore-location-text"
                >
                  San Diego
                </Link>
              </div>
              <div className="explore-location">
                <img className="location-img" src={window.night_sky} alt="" />
                <Link to={`/listings/Austin`} className="explore-location-text">
                  Austin
                </Link>
              </div>
            </div>
          </div>
          <div className="try-hosting-container-container">
            <div className="try-hosting-container">
              <div className="try-hosting-img-container">
                <img className="try-hosting-img" src={try_hosting} alt="" />
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
