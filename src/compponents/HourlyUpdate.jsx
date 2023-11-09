import { useContext, useEffect, useState } from "react";
import SmallCard from "./cards/SmallCard";
import { ForecastContext } from "../App";
import Title from './Title';

export default function HourlyUpdate() {
  const forecastContext = useContext(ForecastContext);
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    setWeather(forecastContext.forecast.forecastday[0].hour)
  }, [forecastContext])

  return (
    <>
      <Title title="Hourly Update"/>

      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-2 overflow-x-auto">
        {weather?.map((d, index) => (
          <SmallCard data={{weather:d}} key={index} />
        ))}
      </div>
          
    </>
  );
}
