import { useState } from "react";
import PropTypes from "prop-types";

function StoreModal({ data, closeModal }) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
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
          <button
            className="minus"
            onClick={setQuantity((prev) => {
              prev - 1;
            })}
          >
            -
          </button>
          <input
            type="text"
            className="quantity"
            value={quantity}
            onChange={handleChange}
            min="1"
          />
          <button
            className="plus"
            onClick={setQuantity((prev) => {
              prev + 1;
            })}
          >
            +
          </button>
        </div>
        <div
          className="cancel-button"
          onClick={() => {
            closeModal;
          }}
        >
          cancel
        </div>
        <div className="buy-button" onClick={() => {}}>
          buy
        </div>
      </div>
    </div>
  );
}

StoreModal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func,
};

export default StoreModal;
