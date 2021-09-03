//import faker from 'faker'

export class User {
    name: string = 'Test'
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        //this.name = faker.name.firstName()
        /*this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }*/
        //this.location.lat = faker.address.latitude()
        //this.location.lng = faker.address.longitude()
    }
}