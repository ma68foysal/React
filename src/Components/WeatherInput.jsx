import React from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './Style.module.css'

function WeatherInput() {
  const navigate = useNavigate()
  function Onsubmit(){
    navigate('/result')
  }
  return (
    <div className={Style.Container}>
        <span className={Style.AppTitle}>React Weather App</span>
        <img className={Style.WelcomeWeatherLogo} src="./Icons/perfect-day.svg" alt="" />
        <span className={Style.ChooseCityLabel}>Find Weather of your city
        </span>
        <form className={Style.SearchBox}>
            <input type="text" placeholder="City" />
            <button  type={"submit"} onClick={Onsubmit}>Search</button>
        </form>
    </div>
  )
}

export default WeatherInput