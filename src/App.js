import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
const Converter = require("node-temperature-converter");


function App() {
  const [temps, setTemps] = useState({
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 275.51
  });

  const getWeather = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  const API_KEY = ''
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=46.563328&lon=-94.2112768&appid=${API_KEY}`, requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => {
        console.log(result);
        setTemps({
          feels_like: new Converter.Kelvin(result.main.feels_like).toFahrenheit(),
          humidity: result.main.humidity,
          pressure: result.main.pressure,
          temp: new Converter.Kelvin(result.main.temp).toFahrenheit(),
          temp_max: new Converter.Kelvin(result.main.temp_max).toFahrenheit(),
          temp_min: new Converter.Kelvin(result.main.temp_min).toFahrenheit()
        });
      },
      console.log(temps)
      )}

  return (
    <div className="App-header">
    <h1>Weather</h1>
    <Button variant="contained" color="primary" onClick={getWeather}>
      Get Weather
    </Button>
    <p>Feels Like: {temps.feels_like}</p>
    <p>Humidity: {temps.humidity}</p>
    <p>Pressure: {temps.pressure}</p>
    <p>Temperature: {temps.temp}</p>
    <p>Max Temperature: {temps.temp_max}</p>
    <p>Min Temperature: {temps.temp_min}</p>
    </div>
  );
}

export default App;
