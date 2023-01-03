import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Context
const ShopContext = createContext();

//Provider
const ShopProvider = ({ children }) => {
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : null;
  const [cart, setCart] = useState(cartLS);
  const [total, setTotal] = useState(0);

  //Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Add Instrument to Cart
  const addInstrumentCar = (instrument) => {
    if (cart.some((instrumentState) => instrumentState.id === instrument.id)) {
      //Revisa si hay un elemento duplicado

      const updatedCar = clearTimeout.map((instrumentState) => {
        //Iterar sobre el arreglo e identificar el elemento duplicado

        if (instrumentState.id === instrument.id) {
          instrumentState.quantity = instrument.quantity; //Reescribir la cantidad
          //instrumentState.quantity += instrument.quantity; //Tambien podemos sumar la cantidad
        }
        return instrumentState;
      });
      setCart(updatedCar);
    } else {
      //New Register, add to car
      setCart([...cart, instrument]);
    }
  };

  //Calculate Total
  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(calculateTotal);
  }, [cart]);

  //Update Instrument Quantity Cart
  const updateQuantity = (instrument) => {
    const updatedCart = cart.map((instrumentState) => {
      if (instrumentState.id === instrument.id) {
        instrumentState.quantity = instrument.quantity;
      }
      return instrumentState;
    });
    setCart(updatedCart);
  };

  //Delete Instrument
  const deleteInstrument = (id) => {
    const updatedCart = cart.filter(
      (instrumentState) => instrumentState.id !== id
    );
    setCart(updatedCart);
  };

  return (
    <ShopContext.Provider
      value={{
        addInstrumentCar,
        cart,
        updateQuantity,
        total,
        deleteInstrument,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider };

export default ShopContext;
