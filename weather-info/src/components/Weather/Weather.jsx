import "../../App.css";

export default function Weather({weather}) {
  return (
    <div className="days">
      {weather.map(({weekDey,icon:Icon,temp}) => {
        return (
          <div className="day" key={Math.random()}>
            <h3>{weekDey}</h3>
            <Icon/>
            <p>{temp} </p>
          </div>
        );
      })}
    </div>
  );
}
