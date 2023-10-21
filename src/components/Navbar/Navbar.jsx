import "./navbar.css";
import LocationIcon from "../ICONS/Location";
import SearchIcon from "../ICONS/SearchIcon";
import SunIcon from "../ICONS/SunIcon";
import NightIcon from "../ICONS/NightIcon";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("day");
  return (
    <div className="header">
      <div className="area">
        <LocationIcon /> Delhi, India
      </div>
      <div className="input-box">
        <SearchIcon />
        <input type="text" placeholder="Search city..." />
      </div>
      <div className={`theme-box ${theme}`}>
        <button
          className="btn btn-theme btn-theme-day"
          onClick={() => setTheme("day")}
        >
          <SunIcon />
        </button>
        <button
          className="btn btn-theme btn-theme-night"
          onClick={() => setTheme("night")}
        >
          <NightIcon />
        </button>
      </div>
    </div>
  );
}
