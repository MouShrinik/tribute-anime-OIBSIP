
import Heading from "../layout/Heading";
import img1 from "../assets/more1.png";
import img2 from "../assets/more2.png";
import MoreStory from "../layout/MoreStory";

const More = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="More" title2="Stories" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <MoreStory img={img1} title="A Collision of Action and Heart" />
        <MoreStory img={img2} title="Threads of Destiny" />
      </div>
    </div>
  );
};

export default More;
