import { useContext, useEffect, useRef, useState } from "react";
import SmallCard from "./cards/SmallCard";
import { ForecastContext } from "../App";

export default function WeeklyForecast() {
  const forecastContext = useContext(ForecastContext);
  const forecastday = useRef(forecastContext.forecast.forecastday)
  // const [forecastday, setForecastday] = useState(forecastContext.forecast.forecastday);

  // useEffect(() => {
  //   setForecastday(forecastContext.forecast.forecastday);
  // }, []);
  
  return (
    <>
      <div className="w-full text-center">
        <h1>Weekly Weather Forecast</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The 'Recent Search Weather' section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>
      <div className="flex mt-8 gap-2">
        {forecastday.current?.map((d, index) => (
          <SmallCard data={{weather:d.day, date: d.date}} key={index} />
        ))}
      </div>
    </>
  );
}
