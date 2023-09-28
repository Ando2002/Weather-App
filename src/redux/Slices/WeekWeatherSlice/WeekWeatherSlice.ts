import { createSlice } from "@reduxjs/toolkit";
import fetchWeekWeather from "./WeekWeatherAPI";
import { WeekDataType } from "../../../types";


interface IInitialState {
    data: WeekDataType | null,
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    data: null,
    isLoading: false,
    error: ''
}

const weekWeatherSlice = createSlice({
    name: 'weekWeather',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchWeekWeather.pending, (state) => {
            state.isLoading = true
        })
        build.addCase(fetchWeekWeather.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.data = payload

        })
        build.addCase(fetchWeekWeather.rejected, (state) => {
            state.isLoading = false
            state.error = 'Error'
            state.data = null
        })
    }
})

export const weekWeatherReducer = weekWeatherSlice.reducer