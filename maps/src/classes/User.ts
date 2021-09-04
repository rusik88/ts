import faker from 'faker'
import { MappableInterface } from '../interfaces/MappableInterface'

export class User implements MappableInterface {
    name: string = 'Test 111'

    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent() {
        return this.name
    }
} 