import PropTypes from "prop-types";

function RecentCard({ data }) {

  const recent = JSON.parse(data);

  return (
    <div className="grid place-items-center w-[300px] h-[400px] border rounded-2xl py-[2rem] bg-gradient-to-b from-sky-400 to-cyan-200 text-white font-bold shadow-md">
      <img src={recent.icon} alt="clima" className="h-24 drop-shadow-md" />
      <h1>{recent.temp}<sup>C</sup></h1>
      <h3>({recent.text})</h3>
      <h1>{recent.name}</h1>
    </div>
  );
}
RecentCard.propTypes = {
  data: PropTypes.string,
};

export default RecentCard;
