import "../assets/other.png";

const MoreStory = ({ img, title }) => {
  return (
    <div className=" flex flex-col items-center justify-between bg-gray-500 border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-3/5">
        <img src={img} alt="img" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">{title}</h3>
        <p className="text-dark text-center md:text-start">
          In the whirlwind of memories, I recall the exhilarating rush, where
          action met heart in a harmonious collision.
        </p>
      </div>
    </div>
  );
};

export default MoreStory;
