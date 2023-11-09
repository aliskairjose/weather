import { useContext, useEffect, useState } from "react";
import SmallCard from "./cards/SmallCard";
import { ForecastContext } from "../App";

export default function WeeklyForecast() {
  const forecastContext = useContext(ForecastContext);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecast(forecastContext.forecast.forecastday)
  }, [forecastContext]);

  return (
    <>
      <div className="w-full text-center">
        <h1>Weekly Weather Forecast</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The `Recent Search Weather` section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-2 overflow-x-auto">
        {forecast?.map((f, index) => (
          <SmallCard data={{ weather: f.day, date: f.date }} key={index} />
        ))}
      </div>
    </>
  );
}
