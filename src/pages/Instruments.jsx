import { useNavigate } from "react-router-dom";

const Instruments = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cover bg-center w-full h-screen ">
      <div className="flex flex-col w-8/12 h-screen mx-auto text-white z-10">
        <h1 className="py-20 text-3xl uppercase font-semibold text-black text-center">
          Musical Instruments
        </h1>

        <main className="grid grid-cols-1 place-items-center xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full z-10 gap-8 pb-10">
          <div className="flex flex-col justify-center items-center border p-4 w-full h-full bg-white rounded shadow-md">
            <img
              src="/img/guitar.jpg"
              alt="Guitar Image"
              className="w-full h-3/5 object-contain"
            />
            <h3 className="text-xl p-2 text-black font-bold">Guitars</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-800 transition-colors rounded text-white font-bold uppercase z-10"
              onClick={() => navigate("/guitars")}
            >
              View All
            </button>
          </div>
          <div className="flex flex-col justify-center items-center border p-4 w-full h-full bg-white rounded shadow-md">
            <img
              src="/img/piano.jpg"
              alt="Piano Image"
              className="w-full h-3/5 object-contain"
            />
            <h3 className="text-xl p-2 text-black font-bold">Pianos</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-800 transition-colors rounded text-white font-bold uppercase z-10"
              onClick={() => navigate("/pianos")}
            >
              View All
            </button>
          </div>
          <div className="flex flex-col justify-center items-center border p-4 w-full h-full bg-white rounded shadow-md">
            <img
              src="/img/trumpet.jpg"
              alt="Trumpet Image"
              className="w-full h-3/5 object-contain"
            />
            <h3 className="text-xl p-2 text-black font-bold">Trumpets</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-800 transition-colors rounded text-white font-bold uppercase z-10"
              onClick={() => navigate("/trumpets")}
            >
              View All
            </button>
          </div>
          <div className="flex flex-col justify-center items-center border p-4 w-full h-full bg-white rounded shadow-md">
            <img
              src="/img/violin.jpg"
              alt="Violin Image"
              className="w-full h-3/5 object-contain"
            />
            <h3 className="text-xl p-2 text-black font-bold">Violins</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-800 transition-colors rounded text-white font-bold uppercase z-10"
              onClick={() => navigate("/violins")}
            >
              View All
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Instruments;
