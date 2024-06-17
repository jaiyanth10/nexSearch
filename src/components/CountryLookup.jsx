"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faWind,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  // Function to get weather icon 
  const getWeatherIcon = (code) => {
    switch (code) {
      case 0:
        return <FontAwesomeIcon icon={faSun} style={{ color: "#FFD700" }} />; // Sun: Gold
      case 1:
      case 2:
      case 3:
        return <FontAwesomeIcon icon={faCloud} style={{ color: "#B0C4DE" }} />; // Cloud: LightSteelBlue
      case 45:
      case 48:
        return <FontAwesomeIcon icon={faSmog} style={{ color: "#696969" }} />; // Smog: DimGray
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return (
          <FontAwesomeIcon icon={faCloudRain} style={{ color: "#00BFFF" }} />
        ); // Light Rain: DeepSkyBlue
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        return (
          <FontAwesomeIcon icon={faCloudRain} style={{ color: "#1E90FF" }} />
        ); // Rain: DodgerBlue
      case 71:
      case 73:
      case 75:
      case 77:
        return (
          <FontAwesomeIcon icon={faSnowflake} style={{ color: "#ADD8E6" }} />
        ); // Snow: LightBlue
      case 80:
      case 81:
      case 82:
        return (
          <FontAwesomeIcon icon={faCloudRain} style={{ color: "#4169E1" }} />
        ); // Heavy Rain: RoyalBlue
      case 85:
      case 86:
        return (
          <FontAwesomeIcon icon={faSnowflake} style={{ color: "#B0E0E6" }} />
        ); // Heavy Snow: PowderBlue
      case 95:
      case 96:
      case 99:
        return <FontAwesomeIcon icon={faWind} style={{ color: "#4682B4" }} />; // Wind: SteelBlue
      default:
        return <FontAwesomeIcon icon={faCloud} style={{ color: "#B0C4DE" }} />; // Default: LightSteelBlue
    }
  };

  async function fetchWeather(lat = 37.7749, lon = -122.4194) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();
      const tempCelsius = data?.hourly.temperature_2m[0];
      const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
      setTemperature(tempFahrenheit)
      setWeather(getWeatherIcon(data.hourly.weathercode[0]));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(getWeatherIcon(0)); // Default to sunny icon in case of error
    }
  }
 // Function to convert Celsius to Fahrenheit
 const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};
  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        if (!response.ok) throw new Error("Failed to fetch location data");
        const data = await response.json();
        const region = data?.region || "";
        const country = data?.country || "United States";
         setCountry(`${region}, ${country}`);
         fetchWeather(data.lat, data.lon);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountry("United States");
        fetchWeather(); // Use default coordinates
      }
    };
    getCountry();
  }, []);

  return (
    <div>
     <span className="mr-4">{country}</span>{weather}   {temperature !== null ? `${temperature.toFixed(1)}°F` :"79°F"}
    </div>
  );
}
