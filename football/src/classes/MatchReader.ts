import { DataReaderInterface } from '../interfaces/MatchReaderInterface'
import { DateStringToDate } from '../helper'
import { MatchResult } from '../enums/MatchResultEnum'

type MatchType = [Date, string, string, number, number, MatchResult, string]

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
                row[5] as MatchResult,
                row[6]
            ]
        })
    }

    /**/
}