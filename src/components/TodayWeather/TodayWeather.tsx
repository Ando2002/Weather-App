import { IWeatherData, WeekDataType } from "../../types"
import Loading from "../Loading/Loading"
import styles from './TodayWeather.module.css'

export interface ITodayWeatherProps {
    weekData: WeekDataType | null,
    activeDay: number
    filteredList?: IWeatherData[]
    dayTemp?: number
    isChecked: boolean
    setDayTemp: (temp: number) => void
    setActiveDay: (activeDay: number) => void
    setIsChecked?: (isChecked: boolean) => void
}

const TodayWeather: React.FC<ITodayWeatherProps> = ({ filteredList, setDayTemp, setActiveDay, isChecked }) => {

    const handleOnClick = (temp: number, idx: number) => () => {
        setDayTemp(temp)
        setActiveDay(idx)
    }


    return (
        <div className={styles.content}>
            {
                filteredList?.map((elem, index) => (
                    <div key={elem.dt} className={styles.block} onClick={handleOnClick(Math.floor(elem.main.temp), index)}>
                        <h3 className={styles.h3}>
                            {elem.dt_txt.slice(5, 10)}
                        </h3>
                        <h3>
                            {Math.floor(elem.main.temp)} {!isChecked ? '°C' : '°F'}
                        </h3>

                    </div>
                ))
            }
        </div>
    )

}

export default TodayWeather