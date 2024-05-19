

function WeatherCard({ weatherData, isLoading, unit }) {

    if(!weatherData){
        return <div>Enter valid US coordinates</div>
    }
    if(weatherData.length === 0){
        return <div>There is no weather data for selected date/time</div>
    }

    //console.log(isLoading);
  return (
    <div className="weather-card">
        {isLoading ? ("Loading ...") : 
        (
            weatherData.map((weather) => (
                <div key={weather.number} className="single-card">
                    <div className="weather-image">
                        <img src={weather.icon} alt="Weather icon" />
                    </div>
                    <div className="weather-description">
                        <h3>{weather.name}: <br/> {unit === "Fahrenheit" ? weather.temperature : Math.floor((parseInt(weather.temperature) - 32) / 9*5) }°{ unit === "Fahrenheit" ? weather.temperatureUnit : "C" }</h3>
                        <p>{weather.shortForecast}</p>
                    </div>
                </div>
            ))
        )
    }
    </div>
  )
}

export default WeatherCard