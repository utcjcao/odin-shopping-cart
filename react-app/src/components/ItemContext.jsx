import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const itemContext = createContext();

export const useItemContext = () => {
  return useContext(itemContext);
};

const ItemStateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  // cart items: collection of ids, and their quanitites. get data values, etc per component, don't get it here
  const handleCartItemChange = (id, quantity) => {
    console.log(id, quantity);
    if (quantity + cartItems[id] <= 0) {
      console.log("del");
      let newItems = { ...cartItems };
      delete newItems[id];
      setCartItems(newItems);
    } else {
      console.log("hi");
      setCartItems((prevItems) => ({
        ...prevItems,
        [id]: (prevItems[id] || 0) + quantity,
      }));
    }
  };

  return (
    <itemContext.Provider
      value={{ cartItems, setCartItems, handleCartItemChange }}
    >
      {children}
    </itemContext.Provider>
  );
};

ItemStateProvider.propTypes = {
  children: PropTypes.element,
};

export { ItemStateProvider, itemContext };
