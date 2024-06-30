export class Time {
    constructor() {
        this.date = new Date(this.prettyDate)
    }

    get prettyDate() {
        return
        this.date.toLocaleString('en-us', { era: 'long', month: 'long', weekday: 'long', day: '2-digit' })


    }
}