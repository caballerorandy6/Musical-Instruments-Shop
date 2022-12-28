import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Violin from "../components/Violin";

export const loader = async () => {
  const { data: violins } = await axios(
    "http://127.0.0.1:1337/api/violins?populate=image"
  );

  return violins.data;
};

const Violins = () => {
  const violins = useLoaderData();

  return (
    <div className="bg-cover bg-center w-full h-screen rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/violins.jpg"
        alt="Violins Background Image"
      />
      <div className="flex flex-col w-8/12 h-screen mx-auto text-white z-10">
        <header className="mt-32">
          <h1 className="p-10 text-3xl uppercase font-semibold text-white text-center">
            Violins
          </h1>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full overflow-y-scroll z-10 gap-8 p-10">
          {violins?.map((violin) => (
            <Violin key={violin.id} violin={violin?.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Violins;
