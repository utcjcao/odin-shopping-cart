import { useState } from "react";
import PropTypes from "prop-types";

function StoreModal({ data, closeModal, handleCartItemChange }) {
  const [quantity, setQuantity] = useState(1);

  function custom(amt) {
    if (amt >= 1) {
      setQuantity(amt);
    }
  }
  const buy = () => {
    handleCartItemChange(data.id, quantity);
    closeModal();
  };

  return (
    <div className="store-item-modal">
      <div className="store-item-photo">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="store-item-text">
        <div className="store-item-title">{data.title}</div>
        <div className="store-item-price">{data.price}</div>
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
        <div
          className="cancel-button"
          onClick={() => {
            closeModal();
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
  );
}

StoreModal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func,
  handleCartItemChange: PropTypes.func,
};

export default StoreModal;
