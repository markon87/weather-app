import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function WeatherForm({ submitForm }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [unit, setUnit] = useState('Fahrenheit')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(latitude && longitude){
            //console.log(startDate, endDate);
            submitForm({latitude, longitude, startDate, endDate, unit});
        }
    }

  return (
    <div className="weather-form">
        <form onSubmit={handleSubmit} aria-labelledby="form-heading" className="form">
            <h2 id="form-heading">Enter coordinates and date/time range:</h2>
            <div className="coordinates">
                <div>
                    <label htmlFor="latitude-input">Latitude: </label>
                    <input id="latitude-input" value={latitude} onChange={(e) => setLatitude((e.target.value).replace(/[^0-9.]/g, ""))} placeholder="e.g., 39.7456" required aria-required="true" />
                </div>
                <div>
                    <label htmlFor="longitude-input">Longitude: </label>
                    <input id="longitude-input" value={longitude} onChange={(e) => setLongitude((e.target.value).replace(/[^0-9.-]/g, ""))} placeholder="e.g., -97.0892" required aria-required="true" />
                </div>
            </div>
            <div className="date-time">
                <div>
                    <label htmlFor="start-date-picker">Choose start date/time: </label>
                    <DatePicker id="start-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" timeFormat="p" timeIntervals={60} aria-required="true" />
                </div>
                <div>
                    <label htmlFor="end-date-picker">Choose end date/time: </label>
                    <DatePicker id="end-date-picker" selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect dateFormat="Pp" timeFormat="p" timeIntervals={60} aria-required="true" />
                </div>
            </div>
            <div className="units">
                <input type="radio" name="unit" value="Fahrenheit" id="fahrenheit" checked={unit === "Fahrenheit"} onChange={(e) => setUnit(e.target.value)} />
                <label htmlFor="fahrenheit">Fahrenheit</label>
                <input type="radio" name="unit" value="Celsius" id="celsius" checked={unit === "Celsius"} onChange={(e) => setUnit(e.target.value)} />
                <label htmlFor="celsius">Celsius</label>
            </div>
            <button type="submit">Get Weather</button>
        </form>
    </div>
  )
}

export default WeatherForm