import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Quote } from "../models/Weather.js"

class TimeService {
    async displayQuote() {
        const quote = await api.get('api/quotes')
        const newQuote = new Quote(quote.data)

        AppState.quote = newQuote

        console.log(newQuote);
    }
}

export const timeService = new TimeService()