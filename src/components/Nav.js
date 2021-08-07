import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Nav = ({ toggle }) => {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo">
            Fredrik Fordelsen
          </Link>

          <div className="mobileIcon">
            <i className="fas fa-bars nav__icon" onClick={toggle} />
          </div>

          <ul className="nav__menu">
            <li className="nav__item">
              <ScrollLink to="about" className="nav__links">
                About
              </ScrollLink>
            </li>

            <li className="nav__item">
              <ScrollLink to="contact" className="nav__links">
                Services
              </ScrollLink>
            </li>

            <li className="nav__item">
              <ScrollLink to="contact" className="nav__links">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
