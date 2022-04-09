import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';


function App() {

  const [weather , setWeather] = useState(null);
  console.log(weather);

  const getWeather = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=46.563328&lon=-94.2112768&appid=${API_KEY}`, requestOptions)
      .then(response => response.text())
      .then(result => setWeather(JSON.parse(result)))
  }

  return (
    <div className="App-header">
    <h1>Weather</h1>
    <Button variant="contained" color="primary" onClick={getWeather}>
      Get Weather
    </Button>
    <p>{weather && weather.name}</p>
     
    </div>
  );
}

export default App;
