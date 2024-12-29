import PropTypes from "prop-types";
import StoreItem from "../components/StoreItem";
import StoreModal from "../components/StoreModal";
import { useState } from "react";
import "../styles/store.css";
import { useApiContext } from "../components/ApiContext";

function Store({ handleCartItemChange }) {
  const { loading, error } = useApiContext();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  function openModal(data) {
    setModalData(data);
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
    setModalData({});
  }
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="store-container">
      {Array.from({ length: 16 }, (_, index) => (
        <StoreItem key={index + 1} id={index + 1} openModal={openModal} />
      ))}
      {isModalVisible && (
        <StoreModal
          data={modalData}
          closeModal={closeModal}
          handleCartItemChange={handleCartItemChange}
        ></StoreModal>
      )}
    </div>
  );
}

Store.propTypes = {
  handleCartItemChange: PropTypes.func.isRequired,
};

export default Store;
