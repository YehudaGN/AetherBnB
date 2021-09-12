import React from "react";
const Splash = () => {
  return (
    <div className="splash-container">
      <div>
        <div className="bg-img-container">
          <img className="bg-img" src={splash_bg} alt="" height="800" />
        </div>
      </div>
      <div className="explore-container-container">
        <div className="explore-h3-container">
          <h3 className="explore-h3">Explore Places To Stay</h3>
        </div>
        <div className="explore-container">
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">New York</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Anchorage</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Philadelphia</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Boston</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Arlington</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Virginia Beach</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">San Diego</p>
          </div>
          <div className="explore-location">
            <img className="location-img" src={window.night_sky} alt="" />
            <p className="explore-location-text">Austin</p>
          </div>
        </div>
      </div>

      <div className="footer-container-container">
        <div className="footer-container">
          <div className="about-h3-container">
            <h3 className="about-h3">About</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
