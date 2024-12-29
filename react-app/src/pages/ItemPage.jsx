import { useState } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../components/ApiContext";
import { useItemContext } from "../components/ItemContext";
import { useNavigate } from "react-router-dom";
import "../styles/item-page.css";

function ItemPage() {
  const { id } = useParams();
  const { data } = useApiContext();
  const { handleCartItemChange } = useItemContext();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  function custom(amt) {
    if (amt >= 1) {
      setQuantity(amt);
    }
  }
  const buy = () => {
    handleCartItemChange(id, quantity);
    navigate("/store");
  };

  return (
    <div className="item-page-container">
      <div className="item-page-photo">
        <img src={data[id].image} alt={data[id].title} />
      </div>
      <div className="store-item-text">
        <div className="store-item-title">{data[id].title}</div>
        <div className="store-item-price">{data[id].price}</div>
        <div className="buy-quantity">
          <input
            type="number"
            className="quantity"
            value={quantity}
            onChange={(e) => {
              custom(parseInt(e.target.value));
            }}
            min="1"
          />
        </div>
        <div className="button-container">
          <div
            className="cancel-button"
            onClick={() => {
              navigate("/store");
            }}
          >
            cancel
          </div>
          <div
            className="buy-button"
            onClick={() => {
              buy();
            }}
          >
            buy
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
