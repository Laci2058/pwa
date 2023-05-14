import { Component, OnInit } from '@angular/core';
import { ValutaService } from '../../services/valuta.service';
import { DatabaseService } from 'src/app/services/database.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private valutaService: ValutaService, private databaseService: DatabaseService,private snackbar: MatSnackBar) {
    }

    fromSelectedElement = "EUR"
    toSelectedElement = "HUF"
    fromInputElement = '1'
    toInputElement = '1'
    onlyOne = '1'
    fav = 'favorite_border'

    ngOnInit(): void {
    }


    submit() {
        if (parseInt(this.fromInputElement) <= 0) {
            this.fromInputElement = '1'
        }
        let response$ = this.valutaService.getData(this.fromSelectedElement, this.toSelectedElement)
        response$.subscribe(res => {
            this.onlyOne = (res.data[this.toSelectedElement].value).toString()
            this.toInputElement = (res.data[this.toSelectedElement].value * parseInt(this.fromInputElement))
                .toFixed(4).toString()
        })
    }

    favorite() {
        if (this.fav === 'favorite_border') {
            this.databaseService.save(this.fromSelectedElement, this.toSelectedElement, this.fromInputElement, this.toInputElement, this.onlyOne)
            this.fav = 'favorite'
            this.snackbar.open('Átváltás elmentve', ' ', {
                duration: 3000
              })
        } else {
            this.databaseService.undo()
            this.fav = 'favorite_border'
            this.snackbar.open('Átváltás törölve', '', {
                duration: 3000
              })
        }
    }


    //ezt meg lehetne oldani API hívásból is de kevés van :(
    currencies = ["ADA", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AVAX", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BNB", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DOT", "DZD", "EGP", "ERN", "ETB", "ETH", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTC", "LTL", "LVL", "LYD", "MAD", "MATIC", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "XRP", "YER", "ZAR", "ZMK", "ZMW", "ZWL"]

}
