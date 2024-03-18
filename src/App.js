// import React, { useState, useEffect } from 'react';
// import Weather from './Weather';
// import Forecast from './Forecast';

// function App() {
//   const [location, setLocation] = useState('');
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchOptions, setSearchOptions] = useState(['kakinada',]); // Set initial search options

//   useEffect(() => {
//     // No need to fetch search options, set them directly
//     setSearchOptions(['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur']);
//   }, []);


//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const fetchWeatherData = async () => {
//     setError(null);
//     try {
//       const apiKey = 'ed9819bef3054d5058875dd1237d46bd';
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
//       );
//       const data = await response.json();
//       setCurrentWeather(data);
//     } catch (error) {
//       setError('Unable to fetch weather data. Please try again.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className="App min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-3xl mb-4">Weather App</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <select
//           value={location}
//           onChange={handleLocationChange}
//           className="border rounded-md px-4 py-2 mr-2"
//         >
//           <option value="">Select location</option>
//           {searchOptions.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <button
//           type="submit"
//           disabled={!location}
//           className={`bg-blue-500 text-white px-4 py-2 rounded-md ${!location && 'cursor-not-allowed'}`}
//         >
//           Search
//         </button>
//       </form>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       {currentWeather && <Weather data={currentWeather} locationName ={location} />}
//       {forecast && <Forecast data={forecast} />}
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Forecast from './Forecast';
import './stylebtn.css';

function App() {
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [searchOptions, setSearchOptions] = useState(['hyderabad', 'kakinada']); // Set initial search options

  useEffect(() => {
    setSearchOptions([
      'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai',
      'Kakinada', 'Bhimavaram', 'Visakhapatnam', // Major cities in Andhra Pradesh
      'Vijayawada', 'Guntur', 'Nellore', 'Rajahmundry', 'Tirupati', 'Kurnool',
      'Kadapa', 'Anantapur', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam',
      'Tenali', 'Adoni', 'Hindupur', 'Proddatur', 'Chittoor', 'Madanapalle',
      'Chirala', 'Srikakulam', 'Anakapalle', 'Tadepalligudem', 'Dharmavaram',
      'Gudivada', 'Narasaraopet', 'Tadipatri', 'Tuni', 'Bapatla', 'Nagari',
      'Gudur', 'Tenali', 'Kavali', 'Palakollu', 'Jaggayyapeta', 'Bobbili',
      'Nidadavole', 'Pithapuram', 'Repalle', 'Ramachandrapuram', 'Amalapuram',
      'Chilakaluripet', 'Yemmiganur', 'Punganur', 'Narasapuram', 'Rayachoti',
      'Ponnur', 'Markapur', 'Sattenapalle', 'Vinukonda', 'Kadiri', 'Rajampet',
      'Pedana', 'Parvathipuram', 'Kadapa', 'Nandigama', 'Badvel', 'Dhone',
      'Macherla', 'Penukonda', 'Nandyal', 'Nuzvid', 'Yemmiganur', 'Kavali',
      'Palasa Kasibugga', 'Guntakal', 'Pulivendla', 'Venkatagiri', 'Sompeta',
      'Kandukur', 'Pamur', 'Bhongir', 'Kavali', 'Sullurpeta', 'Srikalahasti',
      'Vinukonda', 'Giddalur', 'Ravulapalem', 'Tadepalligudem', 'Mandapeta',
      'Mangalagiri', 'Kakinada', 'Bhimavaram', 'Visakhapatnam', 'Vijayawada',
      'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur'
    ]);
    
    // Access the user's location by default
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        setError('Unable to access your location. Please select a location manually.');
      }
    );
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    setError(null);
    try {
      const apiKey = 'ed9819bef3054d5058875dd1237d46bd';
      // Fetch current weather data
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const currentData = await currentResponse.json();
      setCurrentWeather(currentData);
      setLocation(currentData.name); // Set the location name

      // Fetch forecast data
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
    } catch (error) {
      setError('Unable to fetch weather data. Please try again.');
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location) return;
    try {
      const apiKey = 'ed9819bef3054d5058875dd1237d46bd';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
      const data = await response.json();
      setCurrentWeather(data);
      setLocation(data.name); // Set the location name
    } catch (error) {
      setError('Unable to fetch weather data for the selected location. Please try again.');
    }
  };

  return (
    <div className="App min-h-screen p-4 bg-gray-100 flex flex-col justify-center items-center">
      <button data-text="Awesome" className="buttonpma hover:cursor-not-allowed">
    <span className="actual-text">&nbsp;WeatherApp&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;WeatherApp&nbsp;</span>
</button>
      <form onSubmit={handleSubmit} className="m-12">
        <select
          value={location}
          onChange={handleLocationChange}
          className="border rounded-md px-4 py-2 mr-2"
        >
          <option value="">Select location</option>
          {searchOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={!location}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${!location && 'cursor-not-allowed'}`}
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {currentWeather && <Weather data={currentWeather} locationName={location}  />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
