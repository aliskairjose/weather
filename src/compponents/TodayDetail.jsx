import { useContext, useEffect, useState } from "react";
import Moment from 'react-moment';
import windImg from "../assets/icons/wind.png";
import sunsetImg from "../assets/icons/sunset.png";
import sunriseImg from "../assets/icons/sunrise.png";
import humidityImg from "../assets/icons/humidity.png";
import visibilityImg from "../assets/icons/visibility.png";
import { ForecastContext } from "../App";
import Title from "./Title";

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
      <Title title='Today Weather Details'/>

      <div className="flex lg:flex-row flex-col mt-8 lg:gap-5 gap-3">
        <div className="lg:w-1/3 w-full">
          <div className="flex flex-col lg:py-0 py-6 justify-center gap-8 rounded-2xl bg-blue-50 box-border h-full">
            <div className="flex justify-between place-items-center px-10">
              <h2 className="font-semibold md:text-3xl text-xl">{location?.name}</h2>
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

        <div className="grid grid-cols-2 lg:w-2/3 w-full lg:gap-5 gap-3">
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={windImg} alt="wind--v1" />
            <h3 className="text-2xl">Wind</h3>
            <h2 className="md:text-3xl text-xl">{current?.wind_kph} km/h - {current?.wind_mph} mp/h</h2>
            <span className="text-xl"></span>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img
              src={humidityImg}
              alt="wet"
            />
            <h3 className="text-2xl">Humidity</h3>
            <h2 className="md:text-3xl text-xl">{current?.humidity}%</h2>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={visibilityImg} alt="wind--v1" />
            <h3 className="text-2xl">Visibility</h3>
            <h2 className="md:text-3xl text-xl">{current?.vis_km} km - {current?.vis_miles} mp</h2>
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
