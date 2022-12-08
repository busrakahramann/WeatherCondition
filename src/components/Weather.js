import { useCity } from "../context/CityContext";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather } = useWeather();
  const { city } = useCity();
  
  return (
    <>
    {weather.list &&
      <div className="today-weather">
        <div className="left">
          <img
            src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
            alt="weatherIMG"
          />
          <span>
            {weather.list[0].main.temp.toFixed(1)}°
          </span>
          <div>
            <span></span>
          </div>
        </div>
        <div className="right">
          <div className="city-name">{city}</div>
          <div className="weather-name">{weather.list[0].weather[0].main}</div>
        </div>
      </div>
}
      <div className="weather-condition">
        {weather.list &&
          weather.list.map((data, index) => {
            if (index % 8 === 0 || index === 39) {
              return (
                <div
                  key={index}
                  className={`weather-list ${index === 0 ? "active" : ""}`}
                >
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
                </div>
              );
            }
            return "";
          })}
      </div>
    </>
  );
}

export default Weather;
