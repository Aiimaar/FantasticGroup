import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavigationWrapper } from "./navigation.styled";
import  Logo  from "../../assets/images/loopLogo.svg";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

return (
    <NavigationWrapper>

    {/* section one */}
    <div className="logo">
        <img src={Logo} alt="#" />
    </div>

    {/* section two */}
    <div className="right-side">
        <div className={`search-toggle ${isSearchOpen ? "open" : ""}`}>
            <button
                className="icon-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
                ref={searchInputRef}
                type="text"
                placeholder="Address, city or country..."
                aria-label="Search input"
            />
        </div>

       
        <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <nav className={`navbox ${isOpen ? "open" : ""}`}>
            <ul onClick={() => setIsOpen(false)}>
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/location">Location</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/login" aria-label="Login"><FontAwesomeIcon icon={faUser} /></NavLink>
                </li>
            </ul>

        </nav>
      </div>

    </NavigationWrapper>
  );
};

export default Navigation;