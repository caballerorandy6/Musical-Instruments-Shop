import { useContext } from "react";
import ShopContext from "../context/ShopProvider";

const useShop = () => {
  return useContext(ShopContext);
};

export default useShop;
