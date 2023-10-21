import "./App.css";
import formatDate from "./formatTime";
import Navbar from "./components/Navbar/Navbar";
import TemperatureBox from "./components/TemperatureBox/TemperatureBox";

const API_KEY = import.meta.env.VITE_API_KEY;

const date = formatDate("2023-10-21T19:00:00Z");

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <TemperatureBox />
      </div>
    </div>
  );
}

export default App;
