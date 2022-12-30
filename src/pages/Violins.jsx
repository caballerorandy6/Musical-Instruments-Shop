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
    <div className="flex flex-col items-center w-10/12 h-screen mx-auto text-white z-10 bg-white">
      <h1 className="text-3xl mt-12 uppercase font-semibold text-black text-center">
        Guitars
      </h1>

      <button
        className="border bg-blue-600 hover:bg-blue-700 uppercase p-2 rounded-md font-bold shadow-md transition-colors place-self-end w-1/12 mb-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="grid grid-cols-1 place-items-center xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full z-10 gap-8 pb-10">
        {violins?.map((violin) => (
          <Violin key={violin.id} violin={violin?.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Violins;
