import { MatchReader } from "./classes/MatchReader"
import { MatchResult } from "./enums/MatchResultEnum"

const fileReader = new MatchReader('../../football.csv')
fileReader.read()
console.log(fileReader.data)

let manUnitedWins = 0

for(let match of fileReader.data) {
    if(
        (match[1] == 'Man United' && match[5] == MatchResult.HomeWin) ||
        (match[2] == 'Man United' && match[5] == MatchResult.AwayWin)
    ) {
        manUnitedWins++
    }
}

//console.log(fileReader.data)




