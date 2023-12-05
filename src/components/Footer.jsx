
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between bg-gray-700 border-2 border-lightText rounded-lg md:px-32 p-5">
        <div className="flex flex-col md:flex-row gap-5 font-bold p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eaf4f7] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eaf4f7] transition-all cursor-pointer"
          >
            Intro
          </Link>
          <Link
            to="story"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eaf4f7] transition-all cursor-pointer"
          >
            Story
          </Link>
          <Link
            to="more"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eaf4f7] transition-all cursor-pointer"
          >
            More
          </Link>
          <Link
            to="conclude"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eaf4f7] transition-all cursor-pointer"
          >
            Conclude
          </Link>
        </div>

        <div className=" mt-4 md:mt-0">
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer text-blue-200">
            anisence
          </Link>
        </div>
      </div>

      <div className=" text-center mt-4 text-gray-100">
        <p>
          @copyright developed by
          <span className="text-blue-400 px-2">anisence</span>|
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
