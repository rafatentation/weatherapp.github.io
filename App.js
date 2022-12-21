
import React,{useState} from 'react'
import Wheather from './weatherresult'
import './App.css';
import { computeHeadingLevel } from '@testing-library/react';

function App() {
  const APP_KEY = "e0af464eeaa245ed9e6232017221912"
  let cityinput=""
  const [wheatherdata, setwheatherdata]=useState([])
  function citytext()
  {
    document.querySelector("input").addEventListener("input", (e)=> {
      e.preventDefault();
      cityinput= e.target.value;
      console.log(cityinput)
    })
  }
  async function getdata(value)
  {
    if (value==="") return;
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`)
    const result = await data.json();
    setwheatherdata(result.forecast.forecastday)
  console.log(result.forecast.forecastday)  
  }
  return (
  <div>
    <div className="search">
    <input type="text" placeholder="Search a city..." onChange={citytext}/>
      <button onClick={()=>getdata(cityinput)}>Search</button>      
    </div>
    <div>
  {wheatherdata.map(item=>(<Wheather key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>))}
    </div>
  
  </div>

  
);

}

export default App;
