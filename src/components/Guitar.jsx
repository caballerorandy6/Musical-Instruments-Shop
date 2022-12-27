import React from "react";
import { Link } from "react-router-dom";

const Guitar = ({ guitar }) => {
  const { description, image, url, price, name } = guitar;

  return (
    <div className="flex flex-col justify-center items-center border w-3/12 h-5/6 bg-white rounded">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`Guitar Image ${name}`}
      />
      <h3 className="text-black">{name}</h3>
      <p className="text-black">{description}</p>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default Guitar;
