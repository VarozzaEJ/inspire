import { AppState } from "../AppState.js"
import { timeService } from "../services/TimeService.js"
import { setHTML, setText } from "../utils/Writer.js"
import { Quote } from "../models/Weather.js"
import { Pop } from "../utils/Pop.js"

export class TimeController {
    constructor() {
        AppState.time += 1
        this.displayTime()
        this.refreshTime()
        this.displayQuote()
        AppState.on('quote', this.drawQuote)
    }
    displayTime() {
        let time = new Date().toLocaleTimeString()
        setText('time', time)
        AppState.time += 2
    }

    refreshTime() {
        setInterval(this.displayTime, 1000)
    }

    async displayQuote() {
        try {
            await timeService.displayQuote()

        } catch (error) {
            Pop.toast(error)
        }
    }

    drawQuote() {
        let quote = AppState.quote
        console.log(quote);
        let HTMLTemplate = `${quote.quoteTemplate}`
        setHTML('quote', HTMLTemplate)
    }

}