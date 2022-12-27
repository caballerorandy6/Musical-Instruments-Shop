import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-cover bg-center w-full h-screen -z-10 rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/home_bg.jpg"
        alt="Home Background Image"
      />
      <div className="flex flex-col justify-center w-8/12 h-screen mx-auto text-white">
        <h1 className="text-center text-3xl text-w p-8 uppercase font-semibold">
          Welcome to our musical instruments store
        </h1>
        <p className="text-md text-start p-8 mt-10 z-10 opacity-80 rounded">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate eleifend felis, sed elementum neque commodo non. Integer
          justo elit, posuere et dolor eu, scelerisque posuere nibh. Nulla
          tellus orci, pellentesque quis rutrum et, molestie at augue. Mauris
          consectetur accumsan tortor at aliquet. Nam rutrum massa enim, sed
          scelerisque metus auctor et. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Sed elementum
          sollicitudin dolor sed congue. Sed lorem ex, rhoncus ut interdum nec,
          aliquam eleifend ligula. Donec ut sapien non orci finibus efficitur at
          ac dui. Sed vehicula nisl sit amet mauris vestibulum, quis accumsan
          ante feugiat. Donec vel augue sem. Nulla ut tellus nec ipsum venenatis
          blandit. Vestibulum tempor porta justo, at aliquet diam tristique
          placerat. Cras cursus semper elit, vitae tempus ipsum dignissim sit
          amet. Nam at libero suscipit, finibus mauris at, faucibus diam. Fusce
          dolor quam, aliquam eget felis vitae, sagittis faucibus tortor.
        </p>
      </div>
    </div>
  );
};

export default Home;
