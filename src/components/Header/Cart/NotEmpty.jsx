import { useContext } from "react";
import { GrTrash } from "react-icons/gr";
import { addToCart } from "../../../App";
import SneakerStore from "./SneakerStore";
import Cookies from "js-cookie";

function NotEmpty({ setSneakerCount }) {
  const { setAddToCarts } = useContext(addToCart);
  let clientCart = Cookies.get("clientCart");
  let clientData = Object.values(JSON.parse(clientCart));
  let totalPrice = Object.values(clientData).map(
    (sneaker) => +sneaker[0].sPrice * sneaker[1]
  );

  const handleDelete = () => {
    setSneakerCount(0);
    Cookies.remove("clientCart");
    setAddToCarts(0);
  };

  return (
    <div className="not-empty">
      <div className="cart-info">
        <h2 className="total">
          Total:
          <span>
            {totalPrice.length > 1
              ? totalPrice.reduce((a, b) => a + b)
              : totalPrice}
            $
          </span>
        </h2>
        <button className="delete" onClick={() => handleDelete()}>
          <GrTrash />
        </button>
      </div>
      <div className="sneaker-store">
        <SneakerStore />
      </div>
    </div>
  );
}

export default NotEmpty;
