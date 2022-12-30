import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

const ViolinDetail = () => {
  const { violinURL } = useParams();

  const [violin, setViolin] = useState({});
  const [violinId, setViolinId] = useState();
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState(false);

  const { name, description, price, image } = violin;

  const getViolin = async () => {
    try {
      const url = `http://127.0.0.1:1337/api/violins?filters[url]=${violinURL}&populate=image`;
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
      violinId,
      image: image?.data?.attributes?.formats?.medium?.url,
      name,
      price,
      quantity,
    };
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white gap-4">
      <img
        src={image?.data?.attributes?.formats?.medium?.url}
        alt={`Violin Image ${name}`}
        className="w-2/12"
      />
      <div>
        <h3 className="text-black text-4xl font-black p-2">{name}</h3>
        <p className="text-black px-2">{description}</p>
        <p className="text-yellow-500 text-2xl p-2">{`$${price}`}</p>

        <form onSubmit={handleSubmit} action="">
          <div className="flex justify-center items-center gap-4 font-semibold mt-4">
            <label className="font-bold text-xl" htmlFor="quantity">
              Quantity:
            </label>
            <select
              onChange={(e) => setQuantity(+e.target.value)}
              className="bg-gradient-to-b from-gray-500 to-gray-600 p-2 rounded-md text-white"
              id="quantity"
            >
              <option value="">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <input
            className="p-2 border mt-4 w-full rounded-md bg-blue-600 hover:bg-blue-800 transition-colors uppercase text-white font-bold cursor-pointer"
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
