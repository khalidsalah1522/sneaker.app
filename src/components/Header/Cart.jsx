import Empty from "./Cart/Empty";
import NotEmpty from "./Cart/NotEmpty";

function Cart({ value, setSneakerCount }) {
  return (
    <section className="cart-container">
      <div>
        {value > 0 ? <NotEmpty setSneakerCount={setSneakerCount} /> : <Empty />}
      </div>
    </section>
  );
}

export default Cart;
