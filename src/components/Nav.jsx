import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full flex items-center justify-around bg-transparent p-10 font-bold text-white">
      <Link to="/" className="text-4xl">
        Musical Instruments Shop
      </Link>
      <div className="flex gap-6 text-xl uppercase font-bold">
        <Link
          className={`${location.pathname === "/" ? "text-yellow-200" : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/about" ? "text-yellow-200" : ""
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${
            location.pathname === "/instruments" ? "text-yellow-200" : ""
          }`}
          to="/instruments"
        >
          Instruments
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
