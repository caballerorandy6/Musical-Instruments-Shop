import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Instruments = () => {
  return (
    <div className="bg-cover bg-center w-full h-screen rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/instruments.jpg"
        alt="Instrument Background Image"
      />
      <div className="flex flex-col justify-center w-8/12 h-screen mx-auto text-white z-10">
        <header>
          <h1 className="p-10 text-3xl uppercase font-semibold text-white text-center">
            Musical Instruments
          </h1>
        </header>
        <main className="flex justify-center gap-8 w-full overflow-y-scroll">
          <article className="flex flex-col justify-center items-center border w-3/12 bg-white">
            <img
              src="/public/img/guitar.jpg"
              alt="Guitar Img"
              className="w-full h-3/5 z-10"
            />
            <h3 className="text-xl p-2 text-black font-bold ">Guitars</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-bold uppercase z-10"
            >
              View All
            </button>
          </article>
          <article className="flex flex-col justify-center items-center border w-3/12 h-auto bg-white">
            <img
              src="/public/img/piano.jpg"
              alt="Guitar Img"
              className="w-full h-3/5 z-10"
            />
            <h3 className="text-xl p-2 text-black font-bold">Pianos</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-bold uppercase z-10"
            >
              View All
            </button>
          </article>
          <article className="flex flex-col justify-center items-center border w-3/12 bg-white">
            <img
              src="/public/img/trumpet.webp"
              alt="Guitar Img"
              className="w-full h-3/5 z-10"
            />
            <h3 className="text-xl p-2 text-black font-bold">Trumpet</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-bold uppercase z-10"
            >
              View All
            </button>
          </article>
          <article className="flex flex-col justify-center items-center border w-3/12 bg-white">
            <img
              src="/public/img/violin.jpeg"
              alt="Guitar Img"
              className="w-full h-3/5 z-10"
            />
            <h3 className="text-xl p-2 text-black font-bold">Violin</h3>
            <button
              type="button"
              className="p-2 border w-10/12 m-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-bold uppercase z-10"
            >
              View All
            </button>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Instruments;
