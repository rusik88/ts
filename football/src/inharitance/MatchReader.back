
import { DateStringToDate } from '../helper'
import { MatchResult } from '../enums/MatchResultEnum'
import { AbstracCsvFileReader } from './AbstractCsvFileReader'

type MatchType = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends AbstracCsvFileReader<MatchType> {

    constructor(filename: string) {
        super(filename)
    }

    mapRow(row: string[]): MatchType {
        return [
            DateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}