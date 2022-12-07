import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCity } from "./CityContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { city } = useCity();

  const [weather, setWeather] = useState({});
  const values = { weather, setWeather };

  useEffect(() => {
    const getWeatherDataCity = async (city) => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ead722bcd000f6ad721d4e932c37da1e`
        );
        setWeather(data);
      } catch {
        alert("Veri Alınırken Bir hata oluştu.");
      }
    };
    city && getWeatherDataCity(city);
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
