import { MatchType } from "../../../types/MatchDataType";
import { AnalyzerInterface } from "../interfaces/AnalyzerInterface";
import { MatchResultEnum } from "../../../enums/MatchResultEnum"

export class WinsAnalysis implements AnalyzerInterface {
    constructor(public team: string) {

    }

    run(matches: MatchType[]): string {
        let wins = 0
        for(let match of matches) {
            if(
                (match[1] == this.team && match[5] == MatchResultEnum.HomeWin) ||
                (match[2] == this.team && match[5] == MatchResultEnum.AwayWin)
            ) {
                wins++
            }
        }
        return `Team ${this.team} won ${wins}`
    }
    
}