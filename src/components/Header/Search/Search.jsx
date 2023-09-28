import fetchTodayWeather from '../../../redux/Slices/TodayWeatherSlice/TodayWeatherAPI'
import { useAppDispatch } from '../../../redux/store'
import styles from './Search.module.css'
import { useEffect, useRef, useState } from 'react'

function Search() {
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    const searchCity = (e) => {
        e.preventDefault()
        dispatch(fetchTodayWeather(value))
    }


    return (
        <form onSubmit={searchCity} className={styles.form}>
            <input type="text" value={value}  onChange={(e) => setValue(e.target.value)} />
            <button >Search</button>
        </form> 
    )
}

export default Search