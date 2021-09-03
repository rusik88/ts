interface Reportable {
    summary(): void
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    color: 'blue',
    summary(): void {
        console.log(`Civik is ${this.year} old`)
    }
}

const cola = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): void {
        console.log(`Cola has ${this.sugar} grams of sugar`)
    }
}



const printVehicle = (item: Reportable): void => {
    //console.log('Name', vihicle.name)
    //console.log('Year', vihicle.year)
    //console.log('Broken', vihicle.broken)
    item.summary()
}

printVehicle(oldCivic)
printVehicle(cola)