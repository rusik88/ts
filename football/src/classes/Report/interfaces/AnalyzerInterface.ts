import { MatchType } from "../../../types/MatchDataType";

export interface AnalyzerInterface {
    run(matches: MatchType[]): string
}