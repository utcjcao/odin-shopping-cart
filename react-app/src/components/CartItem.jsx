import PropTypes from "prop-types";
import { useApiContext } from "./ApiContext";
import { useItemContext } from "./ItemContext";
import "../styles/cart-item.css";

function CartItem({ id }) {
  const { cartItems, handleCartItemChange } = useItemContext();
  console.log(cartItems);
  const { data, loading } = useApiContext();
  if (loading) return <div>loading ... . .</div>;

  function custom(e) {
    if (e.target.value === "") {
      handleCartItemChange(data[id].id, -1 * cartItems[id]);
    } else {
      let amt = parseInt(e.target.value);
      handleCartItemChange(data[id].id, amt - cartItems[id]);
    }
  }

  return (
    <div className="cart-item-container">
      <div className="cart-item-photo">
        <img src={data[id].image} alt={"no img found"}></img>
      </div>
      <div className="cart-item-text">
        <div> {data[id].title}</div>
        <div>
          {" "}
          amount:{" "}
          <input
            type="number"
            className="quantity"
            value={cartItems[id]}
            onChange={(e) => {
              custom(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CartItem;
