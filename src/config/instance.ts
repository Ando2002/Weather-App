import axios from "axios";

export const API_KEY = '6688b1316d9d0ed04e4e21b2743b16ea'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org',
    params: {
        appid: API_KEY,
    }
})

export default instance