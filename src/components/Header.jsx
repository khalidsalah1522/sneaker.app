import { useContext, useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../App";
import Cart from "../components/Header/Cart";
import Cookies from "js-cookie";

function Header({ handleShowMenu }) {
  const { addToCarts } = useContext(addToCart);
  const [showCart, setShowCart] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [sneakerCount, setSneakerCount] = useState([]);
  const navigate = useNavigate();
  let clientCart = "";

  useEffect(() => {
    if (Cookies.get("clientCart")) {
      clientCart = Cookies.get("clientCart");
      setClientData(Object.values(JSON.parse(clientCart)));
      setSneakerCount(
        clientData.length ? clientData.reduce((a, b) => a + b[1], 0) : ""
      );
    }
  }, [sneakerCount]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate("/")}>
          Sneaker
        </div>
        <div className="col2">
          <div className="cart-wrapper">
            <span>{addToCarts + sneakerCount}</span>
            <button className="cart" onClick={() => setShowCart(!showCart)}>
              <AiOutlineShoppingCart />
            </button>
          </div>
          <button className="toggle-menu" onClick={() => handleShowMenu(true)}>
            <RiMenu3Fill />
          </button>
          {showCart ? (
            <Cart
              setSneakerCount={setSneakerCount}
              value={addToCarts + sneakerCount}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
