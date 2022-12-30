import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-center text-3xl text-w py-20 uppercase font-semibold">
        Welcome to our musical instruments store
      </h1>
      <p className="text-md text-start mb-28 z-10 opacity-80 rounded">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend felis, sed elementum neque commodo non. Integer justo elit,
        posuere et dolor eu, scelerisque posuere nibh. Nulla tellus orci,
        pellentesque quis rutrum et, molestie at augue. Mauris consectetur
        accumsan tortor at aliquet. Nam rutrum massa enim, sed scelerisque metus
        auctor et. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Sed elementum sollicitudin dolor sed
        congue. Sed lorem ex, rhoncus ut interdum nec, aliquam eleifend ligula.
        Donec ut sapien non orci finibus efficitur at ac dui. Sed vehicula nisl
        sit amet mauris vestibulum, quis accumsan ante feugiat. Donec vel augue
        sem. Nulla ut tellus nec ipsum venenatis blandit. Vestibulum tempor
        porta justo, at aliquet diam tristique placerat. Cras cursus semper
        elit, vitae tempus ipsum dignissim sit amet. Nam at libero suscipit,
        finibus mauris at, faucibus diam. Fusce dolor quam, aliquam eget felis
        vitae, sagittis faucibus tortor.
      </p>
    </div>
  );
};

export default Home;
