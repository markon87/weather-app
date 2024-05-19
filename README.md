# Weather App

This React application accepts geographical US latitude/longitude values as input, retrieves weather data using the <a href="https://www.weather.gov/documentation/services-web-api" target="_blank">Weather.gov API</a>, and allows users to choose a specific start and end date/time period to present the forecasted weather. Temperature values can be presented in Fahrenheit or Celsius. The application uses <a href="https://www.npmjs.com/package/react-datepicker" target="_blank">React Datepicker</a> and <a href="https://www.npmjs.com/package/date-fns" target="_blank">date-fns</a> as dependency libraries for features such as datapicker component and to check if the API date/time is within the user-specified interval.

## Application Features

- <b>Geographic coordinates:</b> Accepts latitude and longitude values to get the weather forecast for that location.
- <b>Input validation:</b> Geographic coordinate input fields accept only numbers and special characters like "." and "-".
- <b>Date selection:</b> Accepts a specific start and end day and time to get the forecast for that period.
- <b>Temperature units:</b> Accepts Fahrenheit or Celsius units to show temperature values.
- <b>Weather forecast output:</b> Displays the forecasted temperature, weather icon, and short description of the weather forecast.

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

4. Open your browser and navigate to:

```sh
http://localhost:5173
```

5. Enter US latitude and longitude values in the form, select a start and end day and time, choose between Fahrenheit (default) and Celsius measurement units, and click the "Get Weather" button.

## Future Enhancements

- <b>User Input Validation:</b> Enhance validation for latitude and longitude inputs (restrict values to be only within the range of US coordinates, validate if longitude value is negative and if not, add "-" in front).
- <b>Enhanced Error Handling:</b> Improve error handling and feedback to the user for failed API requests (inform a user about the error in case there is no forecast for a specified day/time or in case any API request fails).
- <b>Improve Accessibility:</b> Use semantic HTML and ARIA roles and attributes to enhance accessibility.
- <b>Optimization:</b> Optimize API calls and application performance (use React.memo and useMemo to optimize rendering, implement Client-Side caching to avoid redundant API calls for the same coordinates).
- <b>Styling:</b> Improve UI/UX with better styling (use Material UI or Tailwind CSS).
- <b>User Experience:</b> Implement Geocoding (implement free geocoding API, such as Google Geocoding API, to get the coordinates from the address).
- <b>Elevate User Experience with AI:</b> Use an AI tool to get coordinates from a user-specified location and get a better forecast description with a more human-friendly response.
- <b>Deployment:</b> Deploy the application to a hosting solution like Firebase or Netflify for wider accessibility.
