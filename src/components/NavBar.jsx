import { React, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../pages/ProfileCard";
import "./NavBarStyle.css";
import profileImg from "../photos/profile.png";

const NavBar = () => {
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [language, setLanguage] = useState("en");

  const user = {
    name: "Name Surname",
    email: "name.surname@gmail.com",
    profileImage: profileImg,
    profileLink: "https://example.com/profile",
  };

  const handleProfileClick = () => {
    setShowProfileCard(!showProfileCard);
  };

  const closeProfileCard = () => {
    setShowProfileCard(false);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const navItems = {
    en: {
      home: "Home",
      authorization: "Authorization",
      contactMe: "Contact Me",
    },
    ge: {
      home: "მთავარი",
      authorization: "ავტორიზაცია",
      contactMe: "დამიკავშირდით",
    },
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li className="navbar-item">
          <Link to="/">{navItems[language].home}</Link>
        </li>

        <li className="navbar-item dropdown">
          {navItems[language].authorization}
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/registration">Registration</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/auth-username-password">
                Sign In with Username and Password
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="/auth-email">Sign In with Email</Link>
            </li>
            <li className="dropdown-item">
              {" "}
              <Link to="https://www.facebook.com/">Sign In with Facebook</Link>
            </li>
          </ul>
        </li>

        <li className="navbar-item">
          <Link to="/contact-me">{navItems[language].contactMe}</Link>
        </li>

        <li className="navbar-item ">
          <Link to="https://www.facebook.com/">
            <img
              className="socials"
              src="https://www.pngkey.com/png/full/767-7674910_black-and-white-facebook-logo-png.png"
              alt="facebook logo"
            />
          </Link>
        </li>
      </ul>

      <ul className="navbar-right">
        <div className="language-switcher">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => toggleLanguage("en")}
          >
            EN
          </button>
          <button
            className={language === "ge" ? "active" : ""}
            onClick={() => toggleLanguage("ge")}
          >
            GE
          </button>
        </div>
        <li className="navbar-item profile-icon" onClick={handleProfileClick}>
          <img src={user.profileImage} alt="User" className="profile-photo" />
        </li>
      </ul>

      {showProfileCard && (
        <ProfileCard user={user} onClose={closeProfileCard} />
      )}
    </nav>
  );
};

export default NavBar;
