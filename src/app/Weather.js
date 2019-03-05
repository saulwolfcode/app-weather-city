export class Weather {
    constructor(city, countryCode) {
        this.apiKey = "63a9c3b07c90d83af850eba356c46427"
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`
        const response= await fetch(URI)
        const data= await response.json()
        return data;

    }
}