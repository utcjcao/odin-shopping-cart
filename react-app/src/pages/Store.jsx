import StoreItem from "../components/StoreItem";
import "../styles/store.css";
import { useApiContext } from "../components/ApiContext";

function Store() {
  const { loading, error } = useApiContext();

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="store-container">
      {Array.from({ length: 16 }, (_, index) => (
        <StoreItem key={index + 1} id={index + 1} />
      ))}
    </div>
  );
}

export default Store;
