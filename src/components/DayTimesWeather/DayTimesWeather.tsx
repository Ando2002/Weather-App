import React from 'react'
import styles from './DayTimesWeather.module.css'
import { ITodayWeatherProps } from '../TodayWeather/TodayWeather'

type DayTimesWeatherProps = Pick<ITodayWeatherProps, 'weekData' | 'activeDay' | 'setActiveDay' | 'isChecked'>

const DayTimesWeather: React.FC<DayTimesWeatherProps> = ({ weekData, activeDay, isChecked }) => {
  const slicedList = weekData?.list.slice(activeDay * 8, activeDay * 8 + 8) 
  
  
  return (
    <div className={styles.content}>
      {weekData?.city.name} <br /> <br /> 
      {
        slicedList?.map(elem => (
          <div key={elem.dt} className={styles.myDiv}>
            <div className={styles.body}>
              <span >
                {elem.dt_txt.slice(10)}
              </span>
              <span>
                {Math.floor(elem.main.temp)}  {!isChecked ? '°C' : '°F'} 
              </span>
            </div>
            <hr />  
          </div>
        ))
      }
    </div>
  )
}

export default DayTimesWeather