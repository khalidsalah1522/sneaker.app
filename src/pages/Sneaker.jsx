import { useContext, useEffect, useRef, useState } from "react";
import { counter } from "../App";
import { addToCart } from "../App";
import { checkAdd } from "../App";
import { FaHeart } from "react-icons/fa";

import "../assets/css/sneaker.css";

function Sneaker() {
  const { count, setCount } = useContext(counter);
  const { addToCarts, setAddToCarts } = useContext(addToCart);
  const { checkAdds, setCheckAdds } = useContext(checkAdd);
  const addFavor = useRef(null);
  const [checkFavor, setCheckFavor] = useState(false);
  let currentSneaker = localStorage.getItem("currentSneaker");
  let clientCurrentSneaker = JSON.parse(currentSneaker);

  useEffect(() => {
    setCheckAdds(false);
    if (checkAdds) {
      setAddToCarts(count + addToCarts);
      setCount(0);
    }
    if (count < 0) {
      setCount(0);
    }
  }, [count, setCount, addToCarts, setAddToCarts, checkAdds, setCheckAdds]);

  useEffect(() => {
    if (checkFavor) {
      addFavor.current.style.color = "hsl(0, 96%, 58%)";
    } else {
      addFavor.current.style.color = "hsl(0, 1%, 61%)";
    }
  }, [checkFavor]);

  return (
    <section className="sneaker-wrapper">
      <div className="sneaker-container">
        <div className="sneaker">
          <img src={clientCurrentSneaker.img} alt="" />
        </div>
        <div className="sneaker-info">
          <div className="sneaker-name">
            <h1>{clientCurrentSneaker.sTitle}</h1>
            <div className="add-favor">
              <button ref={addFavor} onClick={() => setCheckFavor(!checkFavor)}>
                <FaHeart />
              </button>
            </div>
          </div>
          <p>{clientCurrentSneaker.sDesc}</p>
          <div className="price-info">
            <span>$ {clientCurrentSneaker.sPrice}</span>
            <div className="control">
              <button onClick={() => setCount(count - 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
          <div className="buy">
            <div className="add">
              <button onClick={() => setCheckAdds(true)}>Buy Now</button>
            </div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sneaker;
