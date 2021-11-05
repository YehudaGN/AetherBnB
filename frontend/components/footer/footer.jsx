import React from "react";

const Footer = () => {
  return (
    <div className="footer-container-container">
      <div className="footer-container">
        <div className="footer-about-me-container">
          <h3 className="footer-title-h3">About Me</h3>
          <div className="footer-info-container">
            <a className='footer-link' href='https://github.com/yudagn'>Github</a>
            <a className='footer-link' href='https://www.linkedin.com/in/yehuda-goldschein-79872199/'>Linkedin</a>
            <a className='footer-link' href='#'>Personal Site</a>
            
          </div>
        </div>
        <div className="footer-contact-container">
          <h3 className="footer-title-h3">Contact</h3>
          <div className='footer-info-container'>
          <p className="footer-info">yehudagoldschein@gmail.com</p>
          <p className="footer-info">718-551-1355</p>
          <p className="footer-info">New York, NY</p>
          </div>
        </div>
        <div className="footer-other-projects-container">
          <h3 className="footer-title-h3">Other Projects</h3>
          <div className='footer-info-container'>
          <a className='footer-link' href='https://yudagn.github.io/Desert-Runner/'>Desert Runner</a>
          <a className='footer-link' href='https://yudagn.github.io/FracTree/'>FracTree</a>
          </div>
        </div>
        <div className="footer-technologies-container">
          <h3 className="footer-title-h3">Technologies</h3>
          <div className="footer-info-container">
            <p className="footer-info">Ruby</p>
            <p className="footer-info">Ruby on Rails</p>
            <p className="footer-info">PostgreSQL</p>
            <p className="footer-info">JavaScript</p>
            <p className="footer-info">React</p>
            <p className="footer-info">Redux</p>
            <p className="footer-info">GIT</p>
            <p className="footer-info">HTML</p>
            <p className="footer-info">CSS</p>
            <p className="footer-info">Mapbox</p>
            <p className="footer-info">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
