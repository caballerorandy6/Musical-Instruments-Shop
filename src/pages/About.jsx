import "../index.css";

const About = () => {
  return (
    <div className="relative  bg-cover bg-center w-full h-screen -z-10 rgb-img">
      <img
        className="w-full h-full object-cover absolute mix-blend-overlay"
        src="/public/img/about.jpg"
        alt="About Background Image"
      />
    </div>
  );
};

export default About;
