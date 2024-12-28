import PropTypes from "prop-types";
import useFetchData from "./useFetchData";

function StoreItem({ id }) {
  const [data, error, loading] = useFetchData(id);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error == null ? (
        <div id={id} className="store-item-container" onClick={/* open modal*/}>
          <div className="store-item-photo">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="store-item-text">
            <div className="store-item-title">{data.title}</div>
            <div className="store-item-price">{data.price}</div>
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
};

export default StoreItem;
