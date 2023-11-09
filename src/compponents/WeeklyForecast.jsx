import { useContext, useEffect, useState } from "react";
import SmallCard from "./cards/SmallCard";
import { ForecastContext } from "../App";
import Title from "./Title";

export default function WeeklyForecast() {
  const forecastContext = useContext(ForecastContext);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecast(forecastContext.forecast.forecastday)
  }, [forecastContext]);

  return (
    <>
      <Title title='Weekly Weather Forcast'/>
      
      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-2 overflow-x-auto">
        {forecast?.map((f, index) => (
          <SmallCard data={{ weather: f.day, date: f.date }} key={index} />
        ))}
      </div>
    </>
  );
}
