import { AppState } from "../AppState.js"
import { setText } from "../utils/Writer.js"

export class TimeController {
    constructor() {
        AppState.time += 1
        this.displayTime()
        this.refreshTime()
    }
    displayTime() {
        let time = new Date().toLocaleTimeString()
        setText('time', time)
        AppState.time += 2
    }

    refreshTime() {
        setInterval(this.displayTime, 1000)
    }


}