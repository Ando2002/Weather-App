import Header from "../Header/Header"
import TodayWeather from "../TodayWeather/TodayWeather"
import WeekWeather from "../WeekWeather/WeekWeather"
import styles from './Content.module.css'
import { useEffect, useRef, useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import DayTimesWeather from "../DayTimesWeather/DayTimesWeather"
import fetchTodayWeather from "../../redux/Slices/TodayWeatherSlice/TodayWeatherAPI"
import fetchWeekWeather from "../../redux/Slices/WeekWeatherSlice/WeekWeatherAPI"
import Loading from "../Loading/Loading"

type ContentProps = {
    isChecked: boolean,
    setIsChecked: (isChecked: boolean | ((isChecked: boolean) => boolean)) => void
}

const  Content: React.FC<ContentProps> = ({isChecked, setIsChecked}) =>  {
    const isFirstMount = useRef<boolean>(true)
    const dispatch = useAppDispatch()
    const country = useAppSelector((state: RootState) => state.todayWeatherReducer.country)
    const lat = useAppSelector((state: RootState) => state.todayWeatherReducer.lat)
    const lon = useAppSelector((state: RootState) => state.todayWeatherReducer.lon)
    const { data: weekData, isLoading } = useAppSelector((state: RootState) => state.weekWeatherReducer);
    const [dayTemp, setDayTemp] = useState<number | undefined>()
    const [activeDay, setActiveDay] = useState<number>(0)

    useEffect(() => {
        if (isFirstMount.current) {
            dispatch(fetchTodayWeather(country))
            isFirstMount.current = false
        }
    }, [dispatch, country])

    useEffect(() => {
        if (lat && lon) {
            dispatch(fetchWeekWeather({}))
        }
    }, [lat, lon])

    let thisTime = new Date().getHours()

    const filteredList = weekData?.list.filter(elem => {
        let time = Number(elem.dt_txt.slice(11, 13))
        if (thisTime === 23) {
            thisTime = 0
        }
        if (thisTime === time || thisTime - 1 === time) {
            return time === thisTime - 1 || time === thisTime
        } else if (thisTime === time || thisTime + 1 === time) {
            return time === thisTime + 1 || time === thisTime
        }
    })
    useEffect(() => {
        if (weekData) {
            setDayTemp(Math.floor(weekData.list[0].main.temp))
        }
    },[weekData])
        
    if(weekData && dayTemp && !isLoading){
        return (
            <div className={styles.content}>
                <WeekWeather
                    weekData={weekData}
                    dayTemp={dayTemp}
                    isChecked={isChecked}
                />
                <TodayWeather
                    dayTemp={dayTemp}
                    weekData={weekData}
                    filteredList={filteredList}
                    setDayTemp={setDayTemp}
                    activeDay={activeDay}
                    setActiveDay={setActiveDay}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
                <DayTimesWeather
                    weekData={weekData}
                    activeDay={activeDay}
                    setActiveDay={setActiveDay}
                    isChecked={isChecked}
                />
            </div>
        )
    }

    return <Loading/>
}

export default Content