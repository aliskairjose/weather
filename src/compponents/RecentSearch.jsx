import { useContext, useEffect, useState } from "react";
import { ForecastContext } from "../App";
import Title from "./Title";
import RecentCard from "./cards/RecentCard";

export default function RecentSearch() {
  const forecastContext = useContext(ForecastContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    items && setItems(items);

  }, [forecastContext]);

  return (
    <>
      <Title title="Recent Search Weather" />

      <div className="grid grid-flow-col auto-cols-max mt-8 gap-8 overflow-x-auto p-10">
        {items?.map((v, i)=>(
           <RecentCard data={JSON.stringify(v)} key={i}/>
        ))}
      </div>
    </>
  );
}
