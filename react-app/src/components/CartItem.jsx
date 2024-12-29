import PropTypes from "prop-types";
import { useApiContext } from "./ApiContext";

function CartItem({ id, cartItems, handleCartItemChange }) {
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
    <div>
      <div> {data[id].title}</div>
      <div> {cartItems[id]}</div>
      <div className="buy-quantity">
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
  );
}

// CartItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   handleCartItemChange: PropTypes.func.isRequired,
// };

export default CartItem;
