import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather } = useWeather();
  console.log(weather.list);
  if (!weather) {
    return (
      <div>
        <p>Yükleniyor...</p>
      </div>
    );
  }
  return (
    <div className="weather-condition">
      {
      weather.list.map((data, index) => {
        if (index % 8 === 0 || index === 39) {
          return (
            <div key={index}>
              <div>{new Date(data.dt * 1000).toString().split(" ")[0]}</div>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weatherIMG"
              />
              <p>
                <span>
                  {data.main.temp_max.toFixed(1)}° /{" "}
                  {data.main.temp_min.toFixed(1)}°
                </span>
              </p>
              <p>{data.dt_txt}</p>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
}

export default Weather;
