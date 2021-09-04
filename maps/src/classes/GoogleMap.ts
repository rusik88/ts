import { MappableInterface } from '../interfaces/MappableInterface'
import { Company } from './Company'
import { User } from './User'

export class GoogleMap {
    private googleMap: google.maps.Map

    constructor(mapDivId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    public getMap(): google.maps.Map {
        return this.googleMap
    }

    addMappableMarker(mappable: MappableInterface):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        })
        
        marker.addListener("click", () => {
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
              });

            infowindow.open(this.googleMap, marker);
          });
    }

    /*addCompanyMarker(company: Company):void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng,
            }
        })
    }*/


}