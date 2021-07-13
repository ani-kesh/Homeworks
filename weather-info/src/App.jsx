import "./App.css";
import  Weather  from "./components/Weather/Weather.jsx";
import weatherPredictions from './data/weather.data';

function App() {
  const body = (
    <div className="App">
      <Weather weather={weatherPredictions} />
    </div>
  );
  return body;
}

export default App;
