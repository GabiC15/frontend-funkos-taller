const MainSalesCard = ({ props }) => {
  const { title, total, img } = props;

  return (
    <>
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          {img}
        </div>
        <div className="text-right mr-2 md:mr-1">
          <p className="text-xl md:text-2xl">{total}</p>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default MainSalesCard;
