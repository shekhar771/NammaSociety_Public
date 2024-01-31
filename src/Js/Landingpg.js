import React from 'react';
import './Landingpg.css'; // Make sure to import your main.css file

const App = () => {
  return (
    <div className="main-content">
      <section className="navigation">
        <div id="logo">
          <a href="index.html">
            <img src="./assets/namma.png" alt="Namma Society Logo" />
          </a>
        </div>
        <span className="navbar">Namma Society</span>
        <span className="nav-home">
          <a href="#home">Home </a>
        </span>
        <span className="nav-features">
          <a href="#features">Features</a>
        </span>
        <span className="nav-aboutus">
          <a href="#about">About Us</a>
        </span>
        <span className="nav-contactus">
          <a href="#contact">Contact Us</a>
        </span>
        <div className="nav-button">
          <button className="login">
            <a href="login.html">LOGIN</a>
          </button>
        </div>
      </section>

      <section className="home">
        <div className="home-img" id="home">
          <img src="./assets/home.png" alt="Home" />
        </div>
        <span className="home-text1">Empowering Societies, Simplifying Lives</span>
        <span className="home-text2">
          Your All-in-One Solution for Effortless Society Account Management.
        </span>
        <div className="home-contact">
          <div className="home-button"></div>
          <a href="#contact" className="home-contactus">
            Contact Us
          </a>
        </div>
      </section>

      <section className="Features">
        <div className="features-bg"></div>
        <span className="features-text" id="features">
          Features
        </span>
        <div className="box1">
          <img id="cloud" src="./assets/cloud.png" alt="Cloud"/>
        </div>
        <div className="box2">
          <img id="cloud" src="./assets/Pay.png" alt="Pay" />
        </div>
        <div className="box3">
          <img id="cloud" src="./assets/tax.png" alt="Tax" />
        </div>
        <div className="box4">
          <img id="cloud" src="./assets/register.png" alt="Register" />
        </div>
        <div className="box1-font"></div>
        <span className="box1-font1">CLOUD BASED ACCOUNTING SERVICES</span>
        <div className="box2-font"></div>
        <span className="box2-font2">ONLINE PAYMENT GATEWAY</span>
        <div className="box3-font"></div>
        <span className="box3-font3">TAX COMPLIANCE</span>
        <div className="box4-font"></div>
        <span className="box4-font4">MAINTAINING STATUTORY REGISTERS</span>
      </section>

      <div className="aboutus-img" id="about">
        <img src="./assets/aboutus.png" alt="About Us" />
      </div>
      <span className="aboutus-font">About Us</span>
      <div className="name"></div>
      <span className="aboutus-para">
        Welcome to Namma Society, the ultimate solution for seamless society
        account management. With our user-friendly interface, transparent
        financial tracking, and efficient communication tools, we empower
        communities to thrive. Join us in simplifying your society's operations
        and fostering stronger, more connected neighborhoods. Welcome to
        hassle-free living with Namma Society!
      </span>

      <div id="contact" className="footer"></div>
      <span className="footer-text">
        Contact us - <br /> Email: nammasociety@yahoo.com <br /> Mobile: +91
        9898989890
      </span>
      <span className="copyright">© Namma Society</span>
    </div>
  );
};

export default App;
