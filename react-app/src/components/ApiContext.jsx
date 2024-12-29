import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useFetchData from "./useFetchData";

const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

const ApiStateProvider = ({ children }) => {
  const { data, error, loading } = useFetchData();

  return (
    <ApiContext.Provider value={{ data, error, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiStateProvider.propTypes = {
  children: PropTypes.element,
};

export { ApiStateProvider, ApiContext };
