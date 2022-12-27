import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Guitar from "../components/Guitar";

export const loader = async () => {
  const { data: guitars } = await axios(
    "http://127.0.0.1:1337/api/guitars?populate=image"
  );

  return guitars.data;
};

const Guitars = () => {
  const guitars = useLoaderData();

  return (
    <div className="bg-cover bg-center w-full h-screen rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/guitars.jpg"
        alt="Instrument Background Image"
      />
      <div className="flex flex-col justify-center w-8/12 h-screen mx-auto text-white z-10">
        <header>
          <h1 className="p-10 text-3xl uppercase font-semibold text-white text-center">
            Guitar Collection
          </h1>
        </header>
        <main className="flex justify-center gap-8 w-full overflow-y-scroll">
          {guitars?.length && (
            <div>
              {guitars.map((guitar) => (
                <Guitar key={guitar.id} guitar={guitar.attributes} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Guitars;
