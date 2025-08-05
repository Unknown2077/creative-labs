import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface WeatherData {
  current_weather: {
    temperature: number;
    windspeed: number;
  };
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=-6.20&longitude=106.84&current_weather=true"
        );
        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <motion.div
      className="container mx-auto px-6 py-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800">Live Weather in Jakarta</h1>
      <div className="mt-8 p-8 bg-white rounded-lg shadow-lg inline-block">
        {loading && <p className="text-gray-600">Loading weather data...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div>
            <p className="text-5xl font-bold text-blue-600">
              {weather.current_weather.temperature}°C
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Wind Speed: {weather.current_weather.windspeed} km/h
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}