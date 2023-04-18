import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import * as d3 from 'd3';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
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



    /*chart = LineChart(this.rates, {
        x: d => d.date,
        y: d => d.close,
        yLabel: "↑ Daily close ($)",
        width: 800,
        height: 500,
        color: "steelblue"
      })*/
    ngOnInit(): void {
        console.log(this.asd)
        Object.entries(this.asd).forEach(([key, value]) => console.log(`date: ${key} rate: ${value.USD}`)) //dátumok, értékek
    }

}
