import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Context
const ShopContext = createContext();

//Provider
const ShopProvider = ({ children }) => {
  const [car, setCar] = useState([]);

  const hola = "hola";

  const addGuitarCar = (guitar) => {
    if (car.some((guitarState) => guitarState.id === guitar.id)) {
      //Revisa si hay un elemento duplicado

      const updatedCar = car.map((guitarState) => {
        //Iterar sobre el arreglo e identificar el elemento duplicado

        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity; //Reescribir la cantidad
          //guitarState.quantity += guitar.quantity; //Tambien podemos sumar la cantidad
        }
        return guitarState;
      });
      setCar(updatedCar);
    } else {
      //New Register, add to car
      setCar([...car, guitar]);
    }
  };

  return (
    <ShopContext.Provider value={{ addGuitarCar, car }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider };

export default ShopContext;
