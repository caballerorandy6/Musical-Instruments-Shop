import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  //console.log(location);

  return (
    <nav className="fixed justify-around bg-transparent flex w-full">
      <h1> Musical Instruments Shop</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/guitars">Guitars</Link>
        <Link to="/pianos">Pianos</Link>
        <Link to="/trumpets">Trumpets</Link>
        <Link to="/violins">Violins</Link>
      </div>
    </nav>
  );
};

export default Nav;
