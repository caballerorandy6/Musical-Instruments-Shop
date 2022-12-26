import { createContext } from "react";
import { Link } from "react-router-dom";

//Context
const ShopContext = createContext();

//Provider
const ShopProvider = ({ children }) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};

export { ShopProvider };

export default ShopContext;
