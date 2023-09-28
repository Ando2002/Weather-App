import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCountry } from "./TodayWeatherSlice";
import instance from "../../../config/instance";
import { IGetCoordData } from "../../../types";


export type CelsiusType = '&units=Imperial' | '&units=metric'
export const API_KEY = '6688b1316d9d0ed04e4e21b2743b16ea'
export const fahrenheit = '&units=Imperial'
export const celsius = '&units=metric'

const fetchTodayWeather = createAsyncThunk<{ country: string, lat: number | null, lon: number | null }, string>(
    'todayWeather/fetchTodayWeather',
    async function getWeather(country, { dispatch }) {
        const { data } = await instance.get<IGetCoordData[]>('/geo/1.0/direct', {
            params: {
                q: country
            }
        })
        if (data.length) {
            dispatch(setCountry(country))
            return {
                country: data[0].country,
                lat: data[0].lat,
                lon: data[0].lon
            }
        } else dispatch(setCountry('Yerevan'))

        return { country: 'Yerevan', lat: null, lon: null }
    }
)

export default fetchTodayWeather