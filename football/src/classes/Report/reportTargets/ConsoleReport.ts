import { OutputTargetInterface } from "../interfaces/OutputTargetInterface";

export class ConsoleReport implements OutputTargetInterface {
    print(report: string): void {
        console.log(report)
    }
}