import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// fetch 16 items from fakestore
function useFetchData() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let endpoints = [];
    for (let id = 1; id <= 16; id++) {
      endpoints.push(`https://fakestoreapi.com/products/${id}`);
    }

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((endpoint) => {
            return fetch(endpoint);
          })
        );
        if (responses.status >= 400) {
          console.log("error 400");
          throw new Error("server error");
        }
        const data = await Promise.all(responses.map((res) => res.json()));

        const dataObj = data.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
        console.log(dataObj);
        setData(dataObj);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
}

useFetchData.propTypes = {
  id: PropTypes.number,
};

export default useFetchData;
