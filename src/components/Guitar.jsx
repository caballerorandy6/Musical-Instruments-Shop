import React from "react";
import { Link } from "react-router-dom";

const Guitar = ({ guitar }) => {
  const { description, image, url, price, name } = guitar;
  //console.log(guitar);

  return (
    <div className="flex flex-col justify-center items-center border w-full h-full bg-white rounded shadow-md">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`Guitar Image ${name}`}
        className="w-full h-4/6 object-contain"
      />
      <h3 className="text-black text-xl font-black p-2">{name}</h3>
      <p className="text-black px-2">{description}</p>
      <p className="text-yellow-500 text-2xl p-2">{`$${price}`}</p>
      <Link
        to={`/guitar/${url}`}
        className="text-blue-500 p-2 hover:text-yellow-500 font-bold"
      >
        View Product...
      </Link>
    </div>
  );
};

export default Guitar;
