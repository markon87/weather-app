# Weather App

This React application accepts geographical US latitude/longitude values as input, retrieves weather data using the <a href="https://www.weather.gov/documentation/services-web-api" target="_blank">Weather.gov API</a>, and allows users to choose a specific start and end date/time period to present the forecasted temperature. Temperature values can be presented as Fahrenheit or Celsius. The app is using <a href="https://www.npmjs.com/package/react-datepicker" target="_blank">React Datepicker</a> and <a href="https://www.npmjs.com/package/date-fns" target="_blank">date-fns</a> as dependency libraries for features such as datapicker component and checking if the given date/time is within the specified interval.

## Features

- Input latitude and longitude to get the weather forecast for that location.
- Input validation: Inputs accept only numbers and special characters like "." and "-".
- Select a specific start and end date and time to get the forecast for that period.
- Select between Fahrenheit and Celsius units to show temperature values.
- Displays the forecasted temperature, weather icon, and short description of the weather.

## How to Use

1. Clone the repository:

```sh
git clone https://github.com/markon87/weather-app.git
cd weather-app
```

2. Install dependencies:

```sh
npm install
```

3. Run the application:

```sh
npm run dev
```

4. Open your browser and navigate to

```sh
http://localhost:5173
```

5. Enter US latitude and longitude values in the form, select a start and end date/time, choose between Fahrenheit (default) and Celsius measurement units, and click "Get Weather" button.

## Future Enhancements

- <b>User Input Validation:</b> Enhance validation for latitude and longitude inputs (restrict values to be only within the range of US coordinates, validate if longitude value is negative and if not add "-" in front).
- <b>Enhanced Error Handling:</b> Improve error handling and user feedback for failed API requests (inform a user about the error in case there is no forecast for specified date/time or in case API request fails).
- <b>Improve Accessibility:</b> Use semantic HTML and ARIA roles and attributes to enhance accessibility.
- <b>Optimization:</b> Optimize API calls and app performance (use React.memo and useMemo to optimize rendering, implement Client-Side caching to avoid redundant API calls for the same coordinates).
- <b>Styling:</b> Improve UI/UX with better styling (use Material UI or Tailwind CSS).
- <b>User Experience:</b> Implement Geocoding (implement free geocoding API, such as Google Geocoding API, to get the coordinates from the address).
- <b>Elevate User Experience with AI:</b> Use AI tool to get coordinates from the location and get a better forecast description by using AI to generate more human-friendly response.
- <b>Deployment:</b> Deploy application to a hosting solution like Firebase or Netflify for wider accessibility.
