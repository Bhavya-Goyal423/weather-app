import "./temperaturebox.css";
import DayCloudyIcon from "../ICONS/DayCloudyIcon";

export default function TemperatureBox() {
  return (
    <div className="temp-box">
      <div className="temp-wrapper active">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
      <div className="temp-wrapper">
        <div className="day">Mon</div>
        <DayCloudyIcon />
        <div className="temp">16° C</div>
      </div>
    </div>
  );
}
