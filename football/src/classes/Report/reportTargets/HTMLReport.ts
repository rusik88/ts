import { OutputTargetInterface } from "../interfaces/OutputTargetInterface";
import fs from 'fs'

export class HTMLReport implements OutputTargetInterface {
    pathReport: string = '../export/report.html'
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `
        fs.writeFileSync(this.pathReport, html)
    }
}