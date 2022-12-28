import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Piano from "../components/Piano";

export const loader = async () => {
  const { data: pianos } = await axios(
    "http://127.0.0.1:1337/api/pianos?populate=image"
  );

  return pianos.data;
};

const Pianos = () => {
  const pianos = useLoaderData();

  return (
    <div className="bg-cover bg-center w-full h-screen rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/pianos.jpg"
        alt="Pianos Background Image"
      />
      <div className="flex flex-col w-8/12 h-screen mx-auto text-white z-10">
        <header className="mt-32">
          <h1 className="p-10 text-3xl uppercase font-semibold text-white text-center">
            Pianos
          </h1>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full overflow-y-scroll z-10 gap-8 p-10">
          {pianos?.map((piano) => (
            <Piano key={piano.id} piano={piano?.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pianos;
