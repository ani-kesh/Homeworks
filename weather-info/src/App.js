import "./App.css";
import { Weather } from "./scripts/weather.jsx";
import sunny from "./components/img/01.svg";
import mostlySunny from "./components/img/05.svg";
import thunderstorm from "./components/img/09.svg";
import rain from "./components/img/17.svg";

const weatherInfo = [
  {
    id:1,
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    id:2,
    weekDey: "Tuesday",
    imgURL: thunderstorm,
    temp: "32C",
  },
  {
    id:3,
    weekDey: "Wednesday",
    imgURL: mostlySunny,
    temp: "35C",
  },
  {
    id:4,
    weekDey: "Thursday",
    imgURL: sunny,
    temp: "45C",
  },
  {
    id:5,
    weekDey: "Friday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    id:6,
    weekDey: "Saturday",
    imgURL: rain,
    temp: "37C",
  },
  {
    id:7,
    weekDey: "Sunday",
    imgURL: sunny,
    temp: "39C",
  },
];

function App() {
  const body = (
    <div className="App">
      <Weather weather={weatherInfo} />
    </div>
  );
  return body;
}

export default App;
