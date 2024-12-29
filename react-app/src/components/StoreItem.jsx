import PropTypes from "prop-types";
import { useApiContext } from "./ApiContext";
import "../styles/store-item.css";
import { useNavigate } from "react-router-dom";

function StoreItem({ id }) {
  const { data, error, loading } = useApiContext();
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error == null ? (
        <div
          id={id}
          className="store-item-container"
          onClick={() => navigate(`/store/${id}`)}
        >
          <div className="store-item-photo">
            <img src={data[id].image} alt={data[id].title} />
          </div>
          <hr />
          <div className="store-item-text">
            <div className="store-item-title">{data[id].title}</div>
            <div className="store-item-price">${data[id].price}</div>
          </div>
        </div>
      ) : (
        <div>Error occurred</div>
      )}
    </>
  );
}

StoreItem.propTypes = {
  id: PropTypes.number,
  openModal: PropTypes.func,
};

export default StoreItem;
