import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Context
const ShopContext = createContext();

//Provider
const ShopProvider = ({ children }) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};

export { ShopProvider };

export default ShopContext;
