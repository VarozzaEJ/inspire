export class Weather {
    constructor(data) {
        this.name = data.name
        this.weather = data.weather
        this.temp = data.temp
        this.fahrenheit = ''
    }

    get weatherTemplate() {
        return `
            <h3 class="bg-secondary rounded" "></h3><i class="mdi fs-3 mdi-temperature-fahrenheit"></i>
        `
    }
}

// name: String,
//     main: undefined,
//         weather: undefined, 
// * createdAt: ISO Timestamp(Virtual Added by Database)
//     * updatedAt: ISO Timestamp(Virtual Added by Database)