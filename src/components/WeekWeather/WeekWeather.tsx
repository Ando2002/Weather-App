import { WeekDataType } from '../../types'
import styles from './WeekWeather.module.css'

// export const iconsURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

type WeekWeatherProps = {
    weekData: WeekDataType
    dayTemp: number
    isChecked: boolean
}

const WeekWeather: React.FC<WeekWeatherProps> = ({ weekData, dayTemp, isChecked }) => {

        return (
            <div >
                <div className={styles.span}>{weekData?.city.name}</div>
                <div className={styles.span}>{dayTemp} {!isChecked ? '°C' : '°F'}</div>
                <img src='' />
                <h3>Clouds</h3>
            </div>
        )

}

export default WeekWeather