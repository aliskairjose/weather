import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import HourlyUpdate from "./compponents/HourlyUpdate";
import TodayDetail from "./compponents/TodayDetail";
import WeeklyForecast from "./compponents/WeeklyForecast";
import { forecastWeather } from "./providers/api";
import Footer from "./compponents/Footer";
import RecentSearch from "./compponents/RecentSearch";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
            <form className="flex gap-3 w-1/3">
              <div className="relative mt-2 rounded-md shadow-sm w-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                  ref={inputRef}
                  placeholder="Search for location..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className=" px-6 py-1"
                    type="button"
                    onClick={findLocation}
                  >
                    <MagnifyingGlassIcon className="h-6 text-gray-300" />
                  </button>
                </div>
              </div>
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
