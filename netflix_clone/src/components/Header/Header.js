import React, { useState } from "react";
import "./header.css";
import Netflixlogo from "../../Assets/images/Netflixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import hamburger menu icon
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <img src={Netflixlogo} alt="Netflix-logo" className="netflix_logo" />

          <ul className={`nav_links ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <div className="menu_icon" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
