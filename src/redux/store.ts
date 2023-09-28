import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { weekWeatherReducer } from "./Slices/WeekWeatherSlice/WeekWeatherSlice";
import { todayWeatherReducer } from "./Slices/TodayWeatherSlice/TodayWeatherSlice";

const store = configureStore({
    reducer: {
        todayWeatherReducer,
        weekWeatherReducer,
    }
})

type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store