import { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 990) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 990) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Fredrik Fordelsen
        </Link>
        <div className="navbar__icon" onClick={handleToggle}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <>
          <ul className={toggle ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <NavLink
                exact
                to="/"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/about"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                About Me
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/contact"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </>
      </nav>
    </>
  );
};

export default Nav;
