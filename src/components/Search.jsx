import React, { useEffect, useState } from "react";
import vector from "../Assets/Vector (2).svg";
import "../App.css";
import { useLocation } from "react-router-dom";

const Search = ({ handleClick }) => {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  
  return (
    <div className="search">
      <input
        type="text"
        placeholder={`Enter the ${pathname == "/" ? "token" : "pair"}`}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div role="button" className="buton" onClick={() => handleClick(search)}>
        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default Search;
