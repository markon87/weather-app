import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import { parseISO, isWithinInterval } from "date-fns";



// API Endpoint
// https://api.weather.gov/points/{latitude},{longitude}
// For example: https://api.weather.gov/points/39.7456,-97.0892


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [measurementUnit, setMeasurementUnit] = useState("");

  const handleFormSubmit = async({latitude, longitude, startDate, endDate, unit}) => {
    setMeasurementUnit(unit);

    try{
      const res = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`); // using coordinates fetch data from API
      const data = await res.json();

      const forecastURL = data.properties.forecast; // get URL from the response of first API call

      const forecastResponse = await fetch(forecastURL); //fetch data from forecast URL
      const forecast = await forecastResponse.json();

      const forecastData = forecast.properties.periods; // get forecast data for all time periods


      const filteredData = forecastData.filter((singleForcast) => { // filter out data that is not in the interval chosen by user
        const forcastDate = parseISO(singleForcast.startTime);

        return isWithinInterval(forcastDate, {
          start: startDate,
          end: endDate,
        })
      });

      setWeatherData(filteredData);

    }catch(error){
      console.log("Error fetching data: ", error);
      setWeatherData(null);
    }finally{
      setIsLoading(false);
    }
  }
  //console.log(weatherData);
  return (
    <>
      <h1>Weather App</h1>
      <WeatherForm submitForm={handleFormSubmit} />
      <WeatherCard weatherData={weatherData} isLoading={isLoading} unit={measurementUnit} />
    </>
  )
}

export default App
