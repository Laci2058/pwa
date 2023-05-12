import { Component, OnInit } from '@angular/core';
import { ValutaService } from '../../services/valuta.service';
import { Observable } from 'rxjs';
import { ValutaData } from 'src/app/models/valuta-api';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private valutaService: ValutaService) {
    }

    public valuta: Observable<ValutaData> = new Observable
    fromSelectedElement = "EUR"
    toSelectedElement = "HUF"
    fromInputElement = '1'
    toInputElement = '0'

    ngOnInit(): void {
    }


    submit() {
        if (parseInt(this.fromInputElement) <= 0) {
            this.fromInputElement='1'
        }
        let response$ = this.valutaService.getData(this.fromSelectedElement, this.toSelectedElement)
            response$.subscribe(res => {
                this.toInputElement = (res.data[this.toSelectedElement].value * parseInt(this.fromInputElement))
                    .toFixed(4).toString()
            })
    }

    //ezt meg lehetne oldani API hívásból is de kevés van :(
    currencies = ["ADA", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AVAX", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BNB", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DOT", "DZD", "EGP", "ERN", "ETB", "ETH", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTC", "LTL", "LVL", "LYD", "MAD", "MATIC", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "XRP", "YER", "ZAR", "ZMK", "ZMW", "ZWL"]

}
