import img from "../assets/advent.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";

const Conclude = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight text-blue-200">
          A Continuation of
          <span className="text-blue-500"> shared dreams</span>
        </h2>
        <p className=" text-white mt-5 text-start">
          As I continue to explore new animated landscapes, I carry with me
          these fragments of beauty, seeking new stories to immerse myself in,
          forever chasing the magic of animated wonder.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4 p-1">
        <img src={img} alt="img" />
      </div>

      <div className="text-white rounded-full hover:bg-blue-700 py-2 px-4 m-5 bg-slate-500">
        <Link to="home"><FaArrowUp size={22} /></Link>
      </div>

    </div>
  );
};

export default Conclude;
