

const Button = ({title}) => {
  return (
    <div className="p-2">
      <button className=" bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {title}
      </button>
    </div>
  );
};

export default Button;
