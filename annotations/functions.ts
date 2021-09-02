const add = (a:number, b:number): number => {
    return a + b
}

const substract = (a:number, b:number): void => {
    console.log(a, b)
}


function devied(a:number, b:number): number {
    return a / b
}

const multuply = function(a:number, b:number):number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): string => {
    if(!message) {
        throw new Error(message)
    }
    return message
}

const throwError2 = (message: string): void => {
    if(!message) {
        throw new Error(message)
    }
}

const forecast = {
    date: new Date,
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date:Date; weather:string}): void => {
    console.log(date, weather)
}

//ES2015
const logWeather2 = (forecast: {date:Date; weather:string}): void => {
    console.log(forecast)
}

logWeather(forecast)
