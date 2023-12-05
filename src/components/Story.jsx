import img from "../assets/story.png";
//import Button from "../layout/Button";
import Heading from "../layout/Heading";

const Story = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="SkyBorne" title2="Dreams?" />
        <p className=" text-white p-1">
          Among these reminiscences, Makoto Shinkai ethereal creations stand
          out, vivid as the skies in his films. The raindrops mirrored emotions,
          and the celestial canvas painted emotions that transcended language.
          It was as if each scene held a piece of the universe within, urging me
          to gaze skyward and dream.
        </p>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Story;
