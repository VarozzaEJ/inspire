export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get quoteTemplate() {
        return `
        <div class="flex-column bg-smokey rounded text-light  d-flex justify-content-center">
            
            <h2 class="text-center ">
Quote:</h2> 
            <p class="fs-4 mb-0 pb-4 fw-bold text-center">${this.content}</p>
            <div class="d-flex flex-row justify-content-center">
                    <i class="fs-2 secret-reveal mdi mdi-information"></i>

            <h2 class="secret-area text-center text-light-emphasis ms-1">-${this.author}</h2>
            </div>
        </div>
        `
    }
}

// name: String,
//     main: undefined,
//         weather: undefined, 
// * createdAt: ISO Timestamp(Virtual Added by Database)
//     * updatedAt: ISO Timestamp(Virtual Added by Database)

// quote: undefined,
//     description: String, required
//         * createdAt: ISO Timestamp(Virtual Added by Database)
//             * updatedAt: ISO Timestamp(Virtual Added by Database)