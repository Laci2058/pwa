import { Component, OnInit } from '@angular/core';
import * as Plot from '@observablehq/plot';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {

    constructor() { }

    rates = [{
        "success": true,
        "timeseries": true,
        "start_date": "2012-05-01",
        "end_date": "2012-05-03",
        "base": "EUR",
        "rates": {
            "2012-05-01": {
                "USD": 1.322891
            },
            "2012-05-02": {
                "USD": 1.315066
            },
            "2012-05-03": {
                "USD": 1.314491
            }
        }
    }]
    asd = this.rates[0].rates
    /*
    Object{
        date: 2012-04-01
        rate: 1.333
    }
    */

    drawGraph() {
        //dátumok, értékek
        let alma: { date: string, rate: number }[] = []
        Object.entries(this.asd).forEach(([key, value]) => {
            Object.values(value).forEach(val => {
                alma.push({ date: key, rate: val })
            })
        })

        let graf = Plot.plot({
            marks: [
                Plot.line(alma, { x: "date", y: "rate" }),
            ]
        })
        console.log(graf.outerHTML);
        return graf
    }
    ngOnInit(): void {
        let d = document.getElementById('svg-container')
        d?.append(this.drawGraph())
    }

}
