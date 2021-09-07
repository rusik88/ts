import { DataReaderInterface } from '../interfaces/MatchReaderInterface'
import { DateStringToDate } from '../helper'
import { MatchResultEnum } from '../enums/MatchResultEnum'
import { MatchType } from '../types/MatchDataType'


export class MatchReader {

    matches: MatchType[] = []

    constructor(public reader: DataReaderInterface) {}
    
    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map((row: string[]): MatchType => {
            return [
                DateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResultEnum,
                row[6]
            ]
        })
    }

    /**/
}