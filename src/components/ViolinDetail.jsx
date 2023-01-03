import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import useShop from "../hooks/useShop";

const ViolinDetail = () => {
  const { violinURL } = useParams();
  const { addInstrumentCar } = useShop();

  const [violin, setViolin] = useState({});
  const [violinId, setViolinId] = useState();
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState(false);

  const { name, description, price, image } = violin;

  const getViolin = async () => {
    try {
      const url = `${
        import.meta.env.VITE_API_URL
      }/violins?filters[url]=${violinURL}&populate=image`;
      const { data: violin } = await axios(url);
      setViolin(violin.data[0].attributes);
      setViolinId(violin.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViolin();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
      return;
    }

    const selectedViolin = {
      id: violinId,
      image: image?.data?.attributes?.formats?.medium?.url,
      name,
      price,
      quantity,
    };
    addInstrumentCar(selectedViolin);
  };

  return (
    <div className="flex justify-center items-start w-full h-full bg-white mt-10 gap-4">
      <img
        src={image?.data?.attributes?.formats?.medium?.url}
        alt={`Violin Image ${name}`}
        className="w-36"
      />
      <div className="w-4/12">
        <h3 className="text-black text-4xl font-black">{name}</h3>
        <p className="text-black">{description}</p>
        <p className="text-yellow-500 text-2xl p-1">{`$${price}`}</p>

        <form onSubmit={handleSubmit}>
          <label className="font-bold text-xl block" htmlFor="quantity">
            Quantity:
          </label>
          <select
            onChange={(e) => setQuantity(+e.target.value)}
            className="bg-gradient-to-b from-gray-500 to-gray-600 p-2 rounded-md text-white mb-2 w-32 text-center block"
            id="quantity"
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            className="p-2 border w-32 text-md rounded-md bg-blue-600 hover:bg-blue-800 transition-colors uppercase text-white font-bold cursor-pointer"
            type="submit"
            value="Add to cart"
          />
          {message && (
            <Message>
              <p>You must select a quantity!!!</p>
            </Message>
          )}
        </form>
      </div>
    </div>
  );
};

export default ViolinDetail;
