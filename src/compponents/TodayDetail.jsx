import { useContext, useEffect, useState } from "react";
import Moment from 'react-moment';
import windImg from "../assets/icons/wind.png";
import sunsetImg from "../assets/icons/sunset.png";
import sunriseImg from "../assets/icons/sunrise.png";
import humidityImg from "../assets/icons/humidity.png";
import visibilityImg from "../assets/icons/visibility.png";
import { ForecastContext } from "../App";

export default function TodayDetail() {
  const [location, setLocation] = useState(null);
  const [current, setCurrent] = useState(null);
  const [astro, setAstro] = useState(null);

  const forecastContext = useContext(ForecastContext);

  useEffect(() => {
    const {current:curr, forecast, location: loc} = forecastContext
    setCurrent(curr)
    setAstro(forecast?.forecastday[0]?.astro)
    setLocation(loc)
  }, [forecastContext]);

  return (
    <>
      <div className="w-full text-center">
        <h1>Today Weather Details</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The 'Recent Search Weather' section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>

      <div className="flex mt-8 gap-5">
        <div className="w-1/3">
          <div className="flex flex-col justify-center gap-8 rounded-2xl bg-blue-50 box-border h-full">
            <div className="flex justify-between place-items-center px-10">
              <h2 className="font-semibold">{location?.name}</h2>
              <img
                src={current?.condition.icon}
                alt={current?.condition.text}
              />
            </div>
            <div className="text-center text-2xl">
            <Moment format="MMM Do, h:mm a">{current?.last_updated}</Moment>
            </div>
            <div className="grid place-items-center gap-4">
              <p className="text-7xl font-bold">
                {current?.temp_c}
                <sup>C</sup>
              </p>
              <p className="text-2xl font-semibold">
                {current?.condition.text}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex divide-x-2 divide-black justify-center">
                <div className="text-center w-1/4">
                  {current?.wind_kph} km/h
                </div>
                <div className="text-center w-1/4">Wind</div>
              </div>
              <div className="flex divide-x-2 divide-black justify-center ">
                <div className="text-center w-1/4">Hum</div>
                <div className="text-center w-1/4">{current?.humidity}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-2/3 gap-5">
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={windImg} alt="wind--v1" />
            <h3>Wind</h3>
            <h2>{current?.wind_kph} km/h / {current?.wind_mph} mp/h</h2>
            <span className="text-xl"></span>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img
              src={humidityImg}
              alt="wet"
            />
            <h3>Humidity</h3>
            <h2>{current?.humidity}%</h2>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={visibilityImg} alt="wind--v1" />
            <h3>Visibility</h3>
            <h2>{current?.vis_km} km / {current?.vis_miles} mp</h2>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-4">
            <div className="flex justify-evenly w-full px-4 items-center h-full text-sm">
              <div className="text-center">
                <img src={sunriseImg} alt="sunrise" />
                <p className="font-semibold mt-1">Sunrise</p>
                <p>{astro?.sunrise}</p>
              </div>
              <div className="flex flex-col text-center">
                <img src={sunsetImg} alt="sunset" />
                <p className="font-semibold mt-1">Sunset</p>
                <p className="">{astro?.sunset}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
