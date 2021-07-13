import "../App.css";

export function Weather(weatherInfo) {
  return (
    <div className="days">
      {weatherInfo.weather.map((el) => {
        return (
          <div className="day" key={el.id}>
            <h3>{el.weekDey}</h3>
            <img src={el.imgURL} alt="" width="100" />
            <p>{el.temp} </p>
          </div>
        );
      })}
    </div>
  );
}
