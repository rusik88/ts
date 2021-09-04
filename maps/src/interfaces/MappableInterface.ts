export interface MappableInterface {
    location: {
        lat: number,
        lng: number
    }

    markerContent(): string
}