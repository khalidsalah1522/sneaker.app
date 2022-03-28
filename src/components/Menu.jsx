import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Socail from "./Footer/Social";
import { useNavigate } from "react-router-dom";

function Menu({ handleShowMenu }) {
  const navigate = useNavigate();

  return (
    <section className="menu">
      <div className="menu-container">
        <div className="col1">
          <div className="logo" onClick={() => navigate("/")}>
            Sneaker
          </div>
          <button className="close-menu" onClick={() => handleShowMenu(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="col2">
          <nav>
            <ul>
              <li>
                <NavLink to="men" onClick={() => handleShowMenu(false)}>
                  Men collections
                </NavLink>
              </li>
              <li>
                <NavLink to="women" onClick={() => handleShowMenu(false)}>
                  Women collections
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" onClick={() => handleShowMenu(false)}>
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink to="about" onClick={() => handleShowMenu(false)}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Socail />
      </div>
    </section>
  );
}

export default Menu;
