import PropTypes from "prop-types";
import CartItem from "../components/CartItem";

function ShoppingCart({ cartItems, handleCartItemChange }) {
  console.log(cartItems);
  const keysMapped = Object.keys(cartItems).map((key) => {
    return (
      <div className="cart-item" key={key}>
        <CartItem
          id={key}
          cartItems={cartItems}
          handleCartItemChange={handleCartItemChange}
        ></CartItem>
      </div>
    );
  });

  return (
    <div className="cart-container">
      {keysMapped}
      <button>buy !</button>
    </div>
  );
}

// ShoppingCart.propTypes = {
//   cartItems: PropTypes.object.isRequired,
//   handleCartItemChange: PropTypes.func.isRequired,
// };

export default ShoppingCart;
