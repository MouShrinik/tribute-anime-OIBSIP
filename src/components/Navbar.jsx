import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="font-semibold text-gray-100 text-2xl p-1 cursor-pointer">
            anisence
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-bold p-1 text-lg text-gray-100">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#72defc] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#72defc] transition-all cursor-pointer"
          >
            Intro
          </Link>
          <Link
            to="story"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#72defc] transition-all cursor-pointer"
          >
            Story
          </Link>
          <Link
            to="more"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#72defc] transition-all cursor-pointer"
          >
            More
          </Link>
          <Link
            to="conclude"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#72defc] transition-all cursor-pointer"
          >
            Conclude
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-gray-400 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
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
    </div>
  );
};

export default Navbar;
