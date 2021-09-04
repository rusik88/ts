import { User } from './classes/User'
import { Company } from './classes/Company'
import { GoogleMap } from "./classes/GoogleMap";
import { MappableInterface } from './interfaces/MappableInterface';

const map: GoogleMap = new GoogleMap('map')
const user: MappableInterface = new User()
const company: MappableInterface = new Company()
map.addMappableMarker(user)
map.addMappableMarker(company)
map.getMap()
