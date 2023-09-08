import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/Search";
import Pair from "../components/Pair";

const Pairpage = () => {
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const handleSearch = async (search) => {
    const tokenAPI = `https://api.dexscreener.com/latest/dex/tokens/${search}`;
    const pairAPI = `https://api.dexscreener.com/latest/dex/search/?q=${search}`;
    let res = await fetch(pathname == "/" ? tokenAPI : pairAPI);
    res = await res.json();
    res = res.pairs.splice(0, 10);
    setData(res);
  };
  return (
    <div className="page">
      <Search handleClick={handleSearch} />
      {data?.length <= 0
        ? "No Data Please enter a token or a pair"
        : data?.map((el) => {
            return (
              <div key={el.url} className="pair-list">
                <Pair {...el} />
              </div>
            );
          })}
    </div>
  );
};

export default Pairpage;
