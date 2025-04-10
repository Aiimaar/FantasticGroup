import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationWrapper } from "./navigation.styled";
import Logo from "../../assets/images/Logo.svg";
import SearchBar from "../SearchBar/searchEngine"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    window.addEventListener("authChanged", checkAuth);
    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  return (
    <NavigationWrapper>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="right-side">
        <div className={`search-toggle ${isSearchOpen ? "open" : ""}`}>
          <button
            className="icon-button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {isSearchOpen && <SearchBar autoFocus />}
        </div>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <nav className={`navbox ${isOpen ? "open" : ""}`}>
          <ul onClick={() => setIsOpen(false)}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/location">Location</NavLink></li>
            <li><NavLink to="/contact-form">Contact</NavLink></li>

            {!isLoggedIn && (
              <li>
                <NavLink to="/login" aria-label="Login">Login</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/user-profile" aria-label="User profile">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
