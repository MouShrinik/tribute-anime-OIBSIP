

const Heading = ({title1, title2}) => {
  return (
    <div>
      <h3 className=" text-4xl font- text-gray-300">
        {title1} <span className=" text-blue-500">{title2}</span>
      </h3>
    </div>
  );
};

export default Heading;
