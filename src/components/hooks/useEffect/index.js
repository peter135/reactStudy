import React, {useState, useEffect} from "react";
import "./index.css"
import GlobalStats from "./globalStats";
import CountriesChart from "./countriesChart";
import SelectDataKey from "./selectDataKey";
import {useCoronaAPI} from "./useCoronaAPI";

const BASE_URL = "https://corona.lmao.ninja/v2";

function GlobalStats_() {
    // const [globalStats, setGlobalStats] = useState({});
    // const [countries, setCountries] = useState([]);
    const [key, setKey] = useState("cases");


    // useEffect(() => {
    //   const fetchGlobalStats = async () => {
    //     const response = await fetch(`${BASE_URL}/all`);
    //     const data = await response.json();
    //     setGlobalStats(data);
    //   };
  
    //   fetchGlobalStats();
    //   const intervalId = setInterval(fetchGlobalStats, 5000);
  
    //   return () => clearInterval(intervalId);
    // }, []);

    // useEffect(() => {
    //   const fetchCountries = async () => {
    //     const response = await fetch(`${BASE_URL}/countries?sort=${key}`);
    //     const data = await response.json();
    //     setCountries(data.slice(0, 10));
    //   };
  
    //   fetchCountries();
    // }, [key]);

    const globalStats = useCoronaAPI("/all", {
      initialData: {},
      refetchInterval: 5000,
    });

    const countries = useCoronaAPI(`/countries?sort=${key}`, {
      initialData: [],
      converter: (data) => data.slice(0, 10),
    });
  
    return (
      <div className='App'>
        <h1>COVID-19</h1>
        <GlobalStats stats={globalStats} />
        <SelectDataKey onChange={(e) => setKey(e.target.value)} />
        <CountriesChart data={countries} dataKey={key} />
      </div>
    );
  }
  
export default GlobalStats_;
