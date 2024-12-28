import PropTypes from "prop-types";

function ShoppingCart({ cartItems, addCartItem, deleteCartItem }) {
  return <div></div>;
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  addCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};

export default ShoppingCart;
