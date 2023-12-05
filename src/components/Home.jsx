import img from "../assets/home.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center p-3">
        <h2 className=" text-5xl font-semibold leading- text-blue-200">
          A Tapestry of Animated Memories:
          <span className="text-blue-500"> Sharing Worlds Within Worlds</span>
        </h2>
        <p className=" text-white mt-5 text-start">
        <span className="text-bold">The Whispering Canvas: </span>
          I remember the first time I delved into those enchanting realms of
          animated wonder. It was like stumbling upon a treasure trove hidden in
          plain sight. The colors spoke volumes, whispering tales of distant
          lands, inviting me to embark on a journey beyond the mundane.
        </p>

        <Link to="intro" spy={true} smooth={true} duration={500}>
          <Button title="Hop in" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4 p-2">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
