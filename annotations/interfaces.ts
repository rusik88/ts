interface Vihicle {
    name: string
    year:  number
    broken: boolean
    color: string
    summary(color: string): void
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    color: 'blue',
    summary(color: string): void {
        this.color = color
    }
}



const printVehicle = (vihicle: Vihicle): void => {
    console.log('Name', vihicle.name)
    console.log('Year', vihicle.year)
    console.log('Broken', vihicle.broken)
}

printVehicle(oldCivic)