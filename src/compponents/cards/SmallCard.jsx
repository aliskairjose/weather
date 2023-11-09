import Moment from "react-moment";
import PropTypes from "prop-types";
import windImg from "../../assets/icons/wind.png";
import humImag from "../../assets/icons/humidity.png";

export default function SmallCard({ data }) {
  return (
    <div className="grid grid-rows-2 rounded-t-xl bg-gradient-to-b from-blue-50  divide-y-2 divide-gray-300 p-2 w-44 h-72">
      <div className="grid place-items-center pb-2">
        <img src={data?.weather.condition.icon} alt="clima" className="h-10" />
        <p className="text-3xl font-semibold">
          {data?.weather.maxtemp_c || data?.weather.temp_c}
          <sup>C</sup>
        </p>
        <p>{data?.weather.condition.text}</p>
      </div>

      <div className="grid place-items-center">
        <div className="flex justify-between divide-x-2 divide-gray-300">
          <div className="flex items-center pe-1">
            <img src={humImag} alt="wind" className="h-5" />
            <span>{data?.weather.avghumidity}%</span>
            <span>{data?.weather.humidity}%</span>
          </div>
          <div className="flex items-center ps-1">
            <img src={windImg} alt="wind" className="h-5" />
            <span className="ms-1">
              {data?.weather.maxwind_kph ?? data?.weather.wind_kph}km
            </span>
          </div>
        </div>
        <div className="text-xl">
          {data?.date ? (
            <Moment format="dddd">{data?.date}</Moment>
          ) : (
            <Moment format="h:mm a">{data?.weather.time}</Moment>
          )}
        </div>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  data: PropTypes.object,
};
