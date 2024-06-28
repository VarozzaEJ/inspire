import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setText } from "../utils/Writer.js"



export class WeatherController {
    constructor() {
        this.displayWeather()
    }
    async displayWeather() {
        try {
            await weatherService.displayWeather()
            let temperature = AppState.temperature
            setText('weather', temperature)
        } catch (error) {
            Pop.toast(error)
        }
    }

    async celsiusTemperature() {
        try {
            await weatherService.celsiusTemperature()
            let temperature = AppState.temperature
            setText('weather', temperature)
        } catch (error) {
            Pop.toast(error)
        }
    }
}