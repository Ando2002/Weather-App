import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IWeatherParams, WeekDataType } from "../../../types";
import instance from "../../../config/instance";

const fetchWeekWeather = createAsyncThunk<WeekDataType, IWeatherParams>(
    'weekWeather/fetchWeekWeather',
    async function getWeather({ units = 'metric' }, { getState }) {
        const { todayWeatherReducer: { lat, lon } } = getState() as RootState;
        const { data } = await instance.get<WeekDataType>('/data/2.5/forecast', {
            params: {
                lat: lat || '',
                lon: lon || '',
                units
            }
        })
        return data
    }
)

export default fetchWeekWeather