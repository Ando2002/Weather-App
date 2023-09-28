import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchTodayWeather from "./TodayWeatherAPI";

interface IInitialState {
    lat: number | null,
    lon: number | null,
    country: string
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    country: 'Yerevan',
    lat: null,
    lon: null,
    isLoading: false,
    error: ''
}

const TodayWeatherSlice = createSlice({
    name: 'todayWeather',
    initialState,
    reducers: {
        setCountry: (state, {payload}: PayloadAction<string>) => {
            state.country = payload
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchTodayWeather.pending, (state) => {
            state.error = '';
            state.isLoading = true
        })
        build.addCase(fetchTodayWeather.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.country = payload.country;
            state.lat = payload.lat;
            state.lon = payload.lon
        })
    }
})

export const { setCountry } = TodayWeatherSlice.actions

export const todayWeatherReducer = TodayWeatherSlice.reducer