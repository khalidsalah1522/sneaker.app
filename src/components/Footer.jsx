import { NavLink } from "react-router-dom";
import EmailUs from "./Footer/EmailUs";
import Social from "./Footer/Social";

function footer() {
  const TopscrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="footer">
      <div className="more-info">
        <div className="info">
          <h2 className="footer-logo">Sneaker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            odio sequi laboriosam a veritatis deserunt laborum quaerat eaque
            consectetur cupiditate! Quibusdam, odio sequi laboriosam a veritatis
            deserunt laborum quaerat eaque consectetur cupiditate!
          </p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <NavLink to="men" onClick={() => TopscrollTo()}>
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="women" onClick={() => TopscrollTo()}>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="about" onClick={() => TopscrollTo()}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={() => TopscrollTo()}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <EmailUs />
      </div>
      <div className="copyright-socail">
        <p> &copy; 2022 Sneaker.com</p>
        <Social />
      </div>
    </div>
  );
}

export default footer;
