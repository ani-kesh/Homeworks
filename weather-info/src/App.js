import "./App.css";
import { Weather } from "./scripts/weather.jsx";
import sunny from "./components/img/01.svg";
import mostlySunny from "./components/img/05.svg";
import thunderstorm from "./components/img/09.svg";
import rain from "./components/img/17.svg";

const weatherInfo = [
  {
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDey: "Tuesday",
    imgURL: thunderstorm,
    temp: "32C",
  },
  {
    weekDey: "Wednesday",
    imgURL: mostlySunny,
    temp: "35C",
  },
  {
    weekDey: "Thursday",
    imgURL: sunny,
    temp: "45C",
  },
  {
    weekDey: "Friday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDey: "Saturday",
    imgURL: rain,
    temp: "37C",
  },
  {
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
