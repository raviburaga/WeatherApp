// Weather.js
import React from 'react';

const Weather = ({ data, locationName }) => {
  return (
    <div className="p-4 w-screen">
     <div className="h-1 bg-yellow-500 mb-4"></div> {/* Golden line below */}
      <h2 className="pr-8 text-2xl font-bold mb-4">{locationName}</h2>
      <div className="h-1 bg-yellow-500 mb-4"></div> {/* Golden line below */}
      <div className="grid grid-cols-1 gap-4 text-center">
        <p className=" p-2 hover:bg-gray-400  hover:shadow-xl  transition duration-300 rounded-md">
          Temperature: {data.main.temp}°C
        </p>
        <p className=" p-2 hover:bg-gray-400  hover:shadow-xl  transition duration-300  rounded-md">
          Humidity: {data.main.humidity}%
        </p>
        <p className=" p-2 hover:bg-gray-400  hover:shadow-xl  transition duration-300  rounded-md">
          Condition: {data.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default Weather;
