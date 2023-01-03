import "../index.css";

const About = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center text-3xl text-w my-10 uppercase font-semibold">
        About our musical instruments store
      </h1>
      <p className="text-md text-start mb-10 z-10 opacity-80 rounded">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend felis, sed elementum neque commodo non. Integer justo elit,
        posuere et dolor eu, scelerisque posuere nibh. Nulla tellus orci,
        pellentesque quis rutrum et, molestie at augue. Mauris consectetur
        accumsan tortor at aliquet. Nam rutrum massa enim, sed scelerisque metus
        auctor et. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Sed elementum sollicitudin dolor sed
        congue. Sed lorem ex, rhoncus ut interdum nec, aliquam eleifend ligula.
      </p>
      <div className="h-96 w-full bg-cover bg-center relative bg-gradient-to-tr from-gray-500 to-gray-800">
        <img
          src="/img/band.jpg"
          alt="Band About"
          className="h-96 w-full object-cover object-center absolute mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export default About;
