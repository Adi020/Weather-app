export const kelvinToCelsius = (tempK) => {
    return `${(tempK - 273.15).toFixed(1)}°C`
}

export const kelvinToFahrenheit = (tempK) => {
    return `${((tempK - 273.15) * (9/5) + 32).toFixed(1)}°F`
}