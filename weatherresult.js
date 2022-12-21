import React from 'react'
import './wheather.css'
function Wheatherresult({date,mintemp,maxtemp,condition,icon}) {
    return (
        <div className="result">
            <h2>{date}</h2>
            <ul>
                <li><img src={icon} alt=""/> </li>
                <li>{condition}</li>
                <li>{mintemp} c / {maxtemp} c</li>
            </ul>
        </div>
    )
}

export default Wheatherresult