type WeatherIcon = {
    icon: string
}

type City = {
    name: string
}

type Main = {
    temp: number
}

export interface IWeatherData {
    main: Main,
    dt: number
    dt_txt: string
    weather: WeatherIcon[]
}


export type WeekDataType = {
    cod: string,
    city: City,
    list: IWeatherData[]
}

export interface IGetCoordData {
    name: string
    local_names?: Record<string, string>
    lat: number
    lon: number
    country: string
    state: string
}

export type UnitsType = 'Imperial' | 'metric'

export interface IWeatherParams {
    units?: UnitsType
}