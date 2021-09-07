import { MatchReader } from "./classes/MatchReader"
import { CsvFileReader } from "./classes/CsvFileReader"

import { WinsAnalysis } from './classes/Report/analyses/WinsAnalisis'
import { HTMLReport } from './classes/Report/reportTargets/HTMLReport'
import { Summary } from './classes/Report/Summary'
 
const csvReader = new CsvFileReader('../../football.csv')
const matchReader = new MatchReader(csvReader)
matchReader.load()

const summary = new Summary(
    new WinsAnalysis('Man United'), 
    new HTMLReport()
)
summary.buildAndTypeReport(matchReader.matches)






