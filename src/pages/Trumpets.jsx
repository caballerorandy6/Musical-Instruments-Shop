import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Trumpet from "../components/Trumpet";

export const loader = async () => {
  const { data: trumpets } = await axios(
    `${import.meta.env.VITE_API_URL}/trumpets?populate=image`
  );

  return trumpets.data;
};

const Trumpets = () => {
  const trumpets = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-10/12  mx-auto text-white z-10 bg-white">
      <h1 className="text-3xl mt-12 uppercase font-semibold text-black text-center">
        Trumpets
      </h1>

      <button
        className="border bg-blue-600 hover:bg-blue-700 uppercase p-2 text-sm rounded-md font-bold shadow-md transition-colors place-self-end mb-4 w-20"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="grid grid-cols-1 place-items-center xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full z-10 gap-8 pb-10">
        {trumpets?.map((trumpet) => (
          <Trumpet key={trumpet.id} trumpet={trumpet?.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Trumpets;
