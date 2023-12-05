import img from "../assets/intro.png";
//import Button from "../layout/Button";
import Heading from "../layout/Heading";


const Intro = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4 p-2">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Finding Spirited" title2="Harmony?" />
        <p className=" text-white">
          One memory, in particular, floats to the surface, much like the tender
          grace of a Studio Ghibli masterpiece. The artistry was like a delicate
          dance, each frame painting a picture of tranquility and wonder. It was
          in those moments that I realized the sheer elegance in simplicity, a
          lesson that resonated beyond the screen.
        </p>
      </div>
    </div>
  );
};

export default Intro;
