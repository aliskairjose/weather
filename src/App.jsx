import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import HourlyUpdate from "./compponents/HourlyUpdate";
import TodayDetail from "./compponents/TodayDetail";
import WeeklyForecast from "./compponents/WeeklyForecast";
import { forecastWeather } from "./providers/api";
import Footer from "./compponents/Footer";
import RecentSearch from "./compponents/RecentSearch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import cloudImg from "./assets/icons/weather/fill/svg/partly-cloudy-day-rain.svg";
export const ForecastContext = createContext();

function App() {
  const [data, setData] = useState(null);
  const [find, setFind] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const pos = `${position.coords.latitude},${position.coords.longitude}`;
        const res = await forecastWeather({ q: find || pos });

        setItems( [...items, {
          name: res.location.name,
          icon: res.current.condition.icon,
          text: res.current.condition.text,
          temp: res.current.temp_c
        }])

        setData(res);
        setIsLoading(false);
        localStorage.setItem('items', JSON.stringify(items));
      });
    };
    fecthData();
  }, [find]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFind(inputRef.current.value);
  };

  const findLocation = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFind(inputRef.current.value);
  };

  if (data && !isLoading)
    return (
      <ForecastContext.Provider value={data}>
        <div className="border shadow-lg min-h-screen p-4 lg:px-10">
          <div className="w-full flex justify-end">
            <form
              className="flex gap-3 md:w-1/3 w-full"
              onSubmit={handleSubmit}
            >
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
                    <MagnifyingGlassIcon className="h-6 text-blue-300" />
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
      </ForecastContext.Provider>
    );
  return (
    <div className="w-full h-screen grid place-items-center">
      <img src={cloudImg} alt="loading" className="h-40" />
      <span className="text-2xl font-semibold tracking-widest animate-pulse sr-only">
        Loading...
      </span>
    </div>
  );
}

export default App;
