import { createContext, useEffect, useState } from "react";
import "./App.css";
import HourlyUpdate from "./compponents/HourlyUpdate";
import TodayDetail from "./compponents/TodayDetail";
import WeeklyForecast from "./compponents/WeeklyForecast";
import { forecastWeather } from "./providers/api";
import Footer from "./compponents/Footer";

export const ForecastContext = createContext();

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const pos = `${position.coords.latitude},${position.coords.longitude}`;
        const res = await forecastWeather({ q: pos });
        setData(res);
      });
    };
    fecthData();
  }, []);

  return (
    <ForecastContext.Provider value={data}>
      {data ? (
        <div className="lg:container mx-auto border shadow-lg min-h-screen p-4">
          <section className="py-10 my-10">
            <TodayDetail />
          </section>
          <section className="py-10 my-10">
            <WeeklyForecast />
          </section>
          <section className="py-10 my-10">
            <HourlyUpdate />
          </section>
          <Footer />
        </div>
      ) : (
        <p>esperando</p>
      )}
    </ForecastContext.Provider>
  );
}

export default App;
