import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div>
      <div className="bg-black h-60 w-full bg-cover bg-center relative bg-gradient-to-tr from-gray-600 to-gray-900">
        <img
          src="/img/home_bg.jpg"
          alt="Home Background"
          className="w-full h-60 object-cover object-center absolute mix-blend-overlay"
        />
        <div className="flex justify-between items-center text-white p-20 opacity-90">
          <Link
            to="/"
            className="text-6xl hover:text-yellow-300 transition-colors"
          >
            Musical Instrument Store
          </Link>
          <nav className="flex gap-8 uppercase text-2xl font-bold">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-yellow-300" : ""
              } hover:text-yellow-300 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-yellow-300" : ""
              } hover:text-yellow-300 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/instruments"
              className={`${
                location.pathname === "/instruments" ? "text-yellow-300" : ""
              } hover:text-yellow-300 transition-colors`}
            >
              Instruments
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
