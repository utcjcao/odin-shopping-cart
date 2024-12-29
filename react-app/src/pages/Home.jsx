import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-text">
        welcome to the bing bong store. you can buy anything you want. but dont
        expect it to ever arrive lol
      </div>
      <div className="home-buttons">
        <button
          onClick={() => {
            navigate("/store");
          }}
        >
          go to store
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          go to cart
        </button>
      </div>
    </div>
  );
}

export default Home;
