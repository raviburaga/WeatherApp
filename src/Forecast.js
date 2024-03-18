// Forecast.js
import React from 'react';

const Forecast = ({ data }) => {
  // Splitting the data into chunks of 5 items
  var temp = 0
  const chunkedData = [];
  for (let i = 0; i < data.list.length && temp <5; i += 5) {
    chunkedData.push(data.list.slice(i, i + 5));
    temp++;
  }

  return (
    <div class="p-4 rounded-md w-screen">
      <div className="h-1 bg-yellow-500 mb-4"></div> {/* Golden line above */}
      <h2 className="text-2xl text-center font-bold mb-4">☀️ Weather Forecast 🌙 </h2>
      <div className="h-1 bg-yellow-500 mt-4"></div> {/* Golden line below */}
      <div className="grid grid-cols-5 gap-4 ">
        {chunkedData.map((chunk, index) => (
          <div key={index} className=" p-4 rounded-md">
          
            <ul className='list-none'>
              {chunk.map((item) => (
                <li key={item.dt} className='mb-8 hover:bg-gray-400 hover:p-2 hover:shadow-lg hover:scale-125 transition duration-300 rounded-md'>
                  <span className="font-semibold">{item.dt_txt}</span><br />
                  <span>{item.main.temp}°C</span><br />
                  <span>{item.weather[0].description}</span>
                </li>
              ))}
              
            </ul>
            
          </div>
          
        ))}
        
      </div>
      <div className="h-1 bg-yellow-500 mt-4"></div> {/* Golden line below */}
    </div>
  );
};

export default Forecast;
