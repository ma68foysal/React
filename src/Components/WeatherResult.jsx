import React from 'react'
import result from './result.module.css'

function WeatherResult() {
  return (
    <div className={result.Container}>
        <span className={result.AppTitle}>React Weather App</span>
        <div className={result.InfoContainer} >
            
            < span clasName={result.InfoLabel} >
                {/* {value} */}
                22
                <span>| Few Clouds</span>
            </span>
            < img className={result.InfoIcon}  src='./Icons/cloudy-night.svg'/>
        </div>
        <div className={result.WeatherContainer}>
        <span className={result.condition}>Sylhet Division, BD
        {/* <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`} */}
        </span>
        </div>
        <span className={result.WeatherInfoLabel} >Weather Info</span>
        <div className={result.WeatherInfoContainer}>
            <div className={result.WeatherResult}>
                <img src="./Icons/temp.svg" alt="" />
                <span className={result.span}>6 : 37
                    <span>Sunrise</span>
                    </span> 
            </div>
            <div className={result.WeatherResult}>
                <img src="./Icons/humidity.svg" alt="" />
                <span className={result.span}>46

                    <span>Humidity</span>
                    </span> 
            </div>
            <div className={result.WeatherResult}>
                <img src="./Icons/wind.svg" alt="" />
                <span className={result.span}>1.96

                    <span>Wind</span>
                    </span> 
            </div>
            <div className={result.WeatherResult}>
                <img src="./Icons/pressure.svg" alt="" />
                <span className={result.span}>1012

                    <span>Pressure</span>
                    </span> 
            </div>

            
        </div>
        
    </div>
  )
}

export default WeatherResult