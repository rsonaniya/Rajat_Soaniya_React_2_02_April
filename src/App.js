import React, { useEffect, useState } from "react";
import axios from "axios"
import TableRow from "./Components/TableRow";
import ModeInput from "./Components/ModeInput";
import Spinner from "./Components/Spinner";
export default function App() {
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"


useEffect(()=>{
  axios.get(url).then(response=>setData(response.data)).catch(err=>console.log(err))
},[])

  const handleDarkModeChange = () => {
    setIsDarkMode(() => !isDarkMode);
  };
  return (
    <div
      className={`min-vw-100 min-vh-100 ${
        isDarkMode ? "bg-black text-white" : ""
      }`}
    >
      <ModeInput onModeChange={handleDarkModeChange} />
      <table
        className={`table table-bordered table-striped container my-2 ${
          isDarkMode && "table-dark"
        }`}
      >
        <thead>
          <tr>
            <th className="text-center" scope="col">
              Symbol
            </th>
            <th className="text-center" scope="col">
              Name
            </th>
            <th className="text-center" scope="col">
              Current Price
            </th>
            <th className="text-center" scope="col">
              Market Cap
            </th>
            <th className="text-center" scope="col">
              Price Change (%)
            </th>
          </tr>
        </thead>
      <TableRow data={data} />
      </table>
      {data.length===0&&<Spinner/>}
    </div>
  );
}
