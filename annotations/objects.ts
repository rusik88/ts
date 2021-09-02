const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        lat: 1,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age
    }
}

const { age }: {age: number} = profile

//const  coordinate:{lat:number; lng: number} = profile.coordinates

const {coordinates: {lat, lng}} = profile;

console.log(coordinates)

