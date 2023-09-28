import { ChangeEvent } from 'react'
import styles from './header.module.css'
import Search from './Search/Search'
import { useAppDispatch } from '../../redux/store'
import fetchWeekWeather from '../../redux/Slices/WeekWeatherSlice/WeekWeatherAPI'
import { API_KEY } from '../../config/instance'
import { celsius } from '../../redux/Slices/TodayWeatherSlice/TodayWeatherAPI'

export interface IHeaderProps {
    isChecked: boolean,
    setIsChecked: (isChecked: boolean | ((isChecked: boolean) => boolean)) => void
}


export const todayWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=${API_KEY}${celsius}`

const Header: React.FC<IHeaderProps> = ({ isChecked, setIsChecked }) => {

    const dispatch = useAppDispatch()

    const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchWeekWeather({ units: isChecked ? 'metric' : 'Imperial' }))
        if (setIsChecked) {
            setIsChecked((prev: boolean) => !prev)
        }
    }

    return (
        <div className={styles.content}>
            <Search />
            <form className={styles.checkboxes}>
                <input type="radio" name='input' value="metric" defaultChecked onChange={handleOnChange} />
                <span className={styles.span}>°C</span>
                <input type="radio" name='input' value="Imperial" onChange={handleOnChange} />
                <span className={styles.span}>°F</span>
            </form>
        </div>
    )
}

export default Header