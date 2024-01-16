import MainSalesCard from "@/components/admin/dashboard/partials/MainSalesCard";

const MainCards = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        {data.map((data, i) => (
          <MainSalesCard props={data} key={i} />
        ))}
      </div>
    </>
  );
};

export default MainCards;
