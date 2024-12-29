import { useApiContext } from "../components/ApiContext";
import CartItem from "../components/CartItem";
import { useItemContext } from "../components/ItemContext";
import "../styles/cart.css";

function ShoppingCart() {
  const { data } = useApiContext();
  const { cartItems, handleCartItemChange } = useItemContext();

  const calculateTotal = () => {
    let total = 0;
    for (let id in cartItems) {
      total += cartItems[id] * data[id].price;
    }
    return total;
  };

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
      <div className="total-container">
        <div>total: ${calculateTotal()}</div>
        <button>buy !</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
