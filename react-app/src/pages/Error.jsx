import Header from "../components/Header";
import { useApiContext } from "../components/ApiContext";

function Error() {
  const { error, loading } = useApiContext();
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="error">
        <Header></Header>
        <div>{error}</div>
      </div>
    );
  }
}

export default Error;
