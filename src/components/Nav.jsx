import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div>
      <div className="h-60 w-full bg-cover bg-center relative bg-gradient-to-tr from-gray-600 to-gray-900">
        <img
          src="/img/home_bg.jpg"
          alt="Home Background"
          className="w-full h-60 object-cover object-center absolute mix-blend-overlay"
        />
        <div className="flex flex-col lg:flex-row justify-between items-center text-white p-12 opacity-90">
          <Link
            to="/"
            className="text-3xl sm:text-4xl xl:text-5xl hover:text-yellow-300 transition-colors mb-6"
          >
            Musical Instrument Store
          </Link>
          <nav className="flex gap-4  uppercase font-bold text-md sm:text-xl md:text-xl xl:text-2xl">
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
            <Link to="/cart">
              <img src="/img/cart.png" alt="Cart Image" className="w-10" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
