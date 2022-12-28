import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Trumpet from "../components/Trumpet";

export const loader = async () => {
  const { data: trumpets } = await axios(
    "http://127.0.0.1:1337/api/trumpets?populate=image"
  );

  return trumpets.data;
};

const Trumpets = () => {
  const trumpets = useLoaderData();

  return (
    <div className="bg-cover bg-center w-full h-screen rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/trumpets.jpg"
        alt="trumpets Background Image"
      />
      <div className="flex flex-col w-8/12 h-screen mx-auto text-white z-10">
        <header className="mt-32">
          <h1 className="p-10 text-3xl uppercase font-semibold text-white text-center">
            trumpets
          </h1>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full overflow-y-scroll z-10 gap-8 p-10">
          {trumpets?.map((trumpet) => (
            <Trumpet key={trumpet.id} trumpet={trumpet?.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trumpets;
