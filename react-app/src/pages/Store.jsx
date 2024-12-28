import PropTypes from "prop-types";

function Store({ addCartItem }) {
  return <div>Store</div>;
}

Store.propTypes = {
  addCartItem: PropTypes.func.isRequired,
};

export default Store;
