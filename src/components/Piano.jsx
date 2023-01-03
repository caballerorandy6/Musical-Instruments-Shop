import React from "react";
import { Link } from "react-router-dom";

const Piano = ({ piano }) => {
  const { description, image, url, price, name } = piano;
  //console.log(piano);

  return (
    <div className="flex flex-col justify-center p-4 items-center border w-full h-96 bg-white rounded shadow-md">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`Piano Image ${name}`}
        className="w-full h-3/6 object-contain"
      />
      <h3 className="text-black text-xl font-black p-2">{name}</h3>
      <p className="text-black px-2">{description}</p>
      <p className="text-yellow-500 text-xl p-1">{`$${price}`}</p>
      <Link
        to={`/piano/${url}`}
        className="text-blue-500 hover:text-yellow-500 font-bold"
      >
        View Product...
      </Link>
    </div>
  );
};

export default Piano;
