import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import HourlyUpdate from "./compponents/HourlyUpdate";
import TodayDetail from "./compponents/TodayDetail";
import WeeklyForecast from "./compponents/WeeklyForecast";
import { forecastWeather } from "./providers/api";
import Footer from "./compponents/Footer";
import RecentSearch from "./compponents/RecentSearch";

export const ForecastContext = createContext();

function App() {
  const [data, setData] = useState(null);
  const [find, setFind] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const fecthData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const pos = `${position.coords.latitude},${position.coords.longitude}`;
        const res = await forecastWeather({ q: find || pos });
        setData(res);
        setIsLoading(false);
      });
    };
    fecthData();
  }, [find]);

  const findLocation = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFind(inputRef.current.value);
  };

  return (
    <ForecastContext.Provider value={data}>
      {!isLoading ? (
        <div className="lg:container mx-auto border shadow-lg min-h-screen p-4">
          <div className="w-full flex justify-end">
            <form className="flex gap-3">
              <input
                type="text"
                name="name"
                ref={inputRef}
                placeholder="Buscar..."
                className="py-1 px-3 border border-blue-200 rounded-md"
              />
              <button
                className="border rounded-md border-blue-200 px-6 py-1"
                type="button"
                onClick={findLocation}
              >
                <span className="text-gray-500 font-semibold">Buscar</span>
              </button>
            </form>
          </div>
          <section className="py-10 my-10">
            <TodayDetail />
          </section>
          <section className="py-10 my-10">
            <WeeklyForecast />
          </section>
          <section className="py-10 my-10">
            <HourlyUpdate />
          </section>
          <section className="py-10 my-10">
            <RecentSearch />
          </section>
          <Footer />
        </div>
      ) : (
        <div className="w-full h-screen grid place-items-center">
          <span className="text-2xl font-semibold tracking-widest animate-pulse">
            Loading...
          </span>
        </div>
      )}
    </ForecastContext.Provider>
  );
}

export default App;
