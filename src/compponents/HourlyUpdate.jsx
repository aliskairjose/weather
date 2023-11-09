import { useContext, useRef } from "react";
import SmallCard from "./cards/SmallCard";
import { ForecastContext } from "../App";

export default function HourlyUpdate() {
  const forecastContext = useContext(ForecastContext);
  const hours = useRef(forecastContext.forecast.forecastday[0].hour)

  return (
    <>
      <div className="w-full text-center">
        <h1>Hourly Update</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The `Recent Search Weather` section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>

      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-2 overflow-x-auto">
        {hours.current?.map((d, index) => (
          <SmallCard data={{weather:d}} key={index} />
        ))}
      </div>
          
    </>
  );
}
