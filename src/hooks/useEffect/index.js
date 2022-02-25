import React, {useState, useEffect} from "react";
import "./index.css"
import GlobalStats from "./globalStats";

const BASE_URL = "https://corona.lmao.ninja/v2";

function GlobalStats_() {
    const [globalStats, setGlobalStats] = useState({});
  
    useEffect(() => {
      const fetchGlobalStats = async () => {
        const response = await fetch(`${BASE_URL}/all`);
        const data = await response.json();
        setGlobalStats(data);
      };
  
      fetchGlobalStats();
      const intervalId = setInterval(fetchGlobalStats, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className='App'>
        <h1>COVID-19</h1>
        <GlobalStats stats={globalStats} />
      </div>
    );
  }
  
export default GlobalStats_;
