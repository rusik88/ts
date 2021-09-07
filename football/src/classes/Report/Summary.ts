import { AnalyzerInterface } from "./interfaces/AnalyzerInterface";
import { OutputTargetInterface } from "./interfaces/OutputTargetInterface";
import { MatchType } from "../../types/MatchDataType";

export class Summary {
    constructor(
        public analyzer: AnalyzerInterface, 
        public outuputTarget: OutputTargetInterface
    ) {}

    buildAndTypeReport(mathes: MatchType[]):void {
       const output =  this.analyzer.run(mathes)
       this.outuputTarget.print(output)
    }
}