import faker from "faker"
import { MappableInterface } from "../interfaces/MappableInterface"


export class Company implements MappableInterface {
    companyName: string
    catchPhrase: string
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent() {
        return this.companyName
    }
    
}