import { AppState } from "../AppState.js"
import { setText } from "../utils/Writer.js"

export class TimeController {
    constructor() {
        this.displayTime()
        AppState.on('time', this.displayTime)
    }
    displayTime() {
        let time = new Date().toLocaleTimeString()
        setText('time', time)
        setTimeout(this.displayTime, 1000)
        AppState.time += 1
    }



}