import { useContext, useEffect, useState } from "react";
import { ForecastContext } from "../App";
import Title from "./Title";
import RecentCard from "./cards/RecentCard";

export default function RecentSearch() {
  const forecastContext = useContext(ForecastContext);

  useEffect(()=>{  
    const {forescast, location, current} = forecastContext;  
   
  },[forecastContext])

  return (
    <>
      <Title title="Recent Search Weather"/>

      <div className="grid grid-flow-col grid-cols-auto mt-8 gap-8 overflow-x-auto">
        {/* {recentsRef.current.map((v, i)=>(
           <RecentCard data={JSON.stringify(v)} key={i}/>
        ))} */}
      </div>
    </>
  );
}
