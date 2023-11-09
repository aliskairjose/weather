import { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import windImg from "../assets/icons/weather/fill/svg/wind.svg";
import sunsetImg from "../assets/icons/weather/fill/svg/sunset.svg";
import moonsetImg from "../assets/icons/weather/fill/svg/moonset.svg";
import moonriseImg from "../assets/icons/weather/fill/svg/moonrise.svg";
import sunriseImg from "../assets/icons/weather/fill/svg/sunrise.svg";
import humidityImg from "../assets/icons/weather/fill/svg/humidity.svg";
import dayImg from "../assets/icons/weather/fill/svg/clear-day.svg";
import nightImg from "../assets/icons/weather/fill/svg/clear-night.svg";
import uvImg from "../assets/icons/weather/fill/svg/uv-index.svg"
import { ForecastContext } from "../App";
import Title from "./Title";

export default function TodayDetail() {
  const [location, setLocation] = useState(null);
  const [current, setCurrent] = useState(null);
  const [astro, setAstro] = useState(null);

  const forecastContext = useContext(ForecastContext);

  useEffect(() => {
    const { current: curr, forecast, location: loc } = forecastContext;
    setCurrent(curr);
    setAstro(forecast?.forecastday[0]?.astro);
    setLocation(loc);
  }, [forecastContext]);

  return (
    <>
      <Title title="Today Weather Details" />

      <div className="flex lg:flex-row flex-col mt-8 lg:gap-5 gap-3">
        <div className="lg:w-1/3 w-full">
          <div className="relative flex flex-col lg:py-0 py-6 justify-center gap-8 rounded-2xl bg-blue-50 box-border h-full">
            <img
              src={current?.is_day ? dayImg : nightImg}
              alt=""
              className="h-24 absolute top-0 right-0 "
            />
            <div className="flex justify-between place-items-center px-10">
              <h2 className="font-semibold md:text-3xl text-xl">
                {location?.name}
              </h2>
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
                  {current?.vis_km} km/h
                </div>
                <div className="text-center w-1/4">Visibility</div>
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
            <img src={windImg} alt="wind--v1" className="h-32 w-32" />
            <h2 className="md:text-3xl text-xl">
              Wind {current?.wind_kph} km/h
            </h2>
            <span className="text-xl"></span>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={humidityImg} alt="humidity" className="h-32 w-32" />
            <h2 className="md:text-3xl text-xl">
              Humidity {current?.humidity}%
            </h2>
          </div>
          <div className="grid place-items-center rounded-2xl bg-blue-50  w-full py-[50px]">
            <img src={uvImg} alt="visibility" className="h-32 w-32" />
            <h2 className="md:text-3xl text-xl">
              UV {current?.uv}
            </h2>
          </div>
          <div className=" grid place-items-center rounded-2xl bg-blue-50  w-full py-4">
            <div className="grid grid-cols-2 w-full px-4 items-center gap-4 text-sm">
              <div className="flex flex-col items-center">
                <img src={sunriseImg} alt="sunrise" className="h-24 w-24" />
                <p className="font-semibold mt-1">Sunrise</p>
                <p>{astro?.sunrise}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={sunsetImg} alt="sunset" className="h-24 w-24" />
                <p className="font-semibold mt-1">Sunset</p>
                <p className="">{astro?.sunset}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={moonriseImg} alt="sunrise" className="h-24 w-24" />
                <p className="font-semibold mt-1">Moonrise</p>
                <p>{astro?.moonrise}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={moonsetImg} alt="sunset" className="h-24 w-24" />
                <p className="font-semibold mt-1">Moonset</p>
                <p className="">{astro?.moonset}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
