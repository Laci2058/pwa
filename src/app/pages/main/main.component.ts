import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.Valami()
    }
    arr:string[]=[]
    Valami(){
        Object.entries(this.lofasz).forEach(([key, value])=>{
            Object.values(value).forEach(val=>{
                
                this.arr.push('"'+val.code+'"')
            })

        })
        console.log(this.arr);

    }


lofasz2 = ["ADA","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AVAX","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BNB","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DOT","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LVL","LYD","MAD","MATIC","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPF","XRP","YER","ZAR","ZMK","ZMW","ZWL"]
    lofasz = {
        "meta": {
            "last_updated_at": "2023-05-10T23:59:59Z"
        },
        "data": {
            "ADA": {
                "code": "ADA",
                "value": 2.70629
            },
            "AED": {
                "code": "AED",
                "value": 3.672205
            },
            "AFN": {
                "code": "AFN",
                "value": 88.000102
            },
            "ALL": {
                "code": "ALL",
                "value": 101.350125
            },
            "AMD": {
                "code": "AMD",
                "value": 386.400535
            },
            "ANG": {
                "code": "ANG",
                "value": 1.803561
            },
            "AOA": {
                "code": "AOA",
                "value": 510.000744
            },
            "ARS": {
                "code": "ARS",
                "value": 228.530481
            },
            "AUD": {
                "code": "AUD",
                "value": 1.474587
            },
            "AVAX": {
                "code": "AVAX",
                "value": 0.064259
            },
            "AWG": {
                "code": "AWG",
                "value": 1.800003
            },
            "AZN": {
                "code": "AZN",
                "value": 1.700003
            },
            "BAM": {
                "code": "BAM",
                "value": 1.786578
            },
            "BBD": {
                "code": "BBD",
                "value": 2.02052
            },
            "BDT": {
                "code": "BDT",
                "value": 107.44788
            },
            "BGN": {
                "code": "BGN",
                "value": 1.780507
            },
            "BHD": {
                "code": "BHD",
                "value": 0.377033
            },
            "BIF": {
                "code": "BIF",
                "value": 2087.003581
            },
            "BMD": {
                "code": "BMD",
                "value": 1.000002
            },
            "BNB": {
                "code": "BNB",
                "value": 0.003176
            },
            "BND": {
                "code": "BND",
                "value": 1.328951
            },
            "BOB": {
                "code": "BOB",
                "value": 6.914988
            },
            "BRL": {
                "code": "BRL",
                "value": 4.944405
            },
            "BSD": {
                "code": "BSD",
                "value": 1.000714
            },
            "BTC": {
                "code": "BTC",
                "value": 0.000036
            },
            "BTN": {
                "code": "BTN",
                "value": 82.090942
            },
            "BWP": {
                "code": "BWP",
                "value": 13.369653
            },
            "BYN": {
                "code": "BYN",
                "value": 2.525865
            },
            "BYR": {
                "code": "BYR",
                "value": 19600
            },
            "BZD": {
                "code": "BZD",
                "value": 2.017176
            },
            "CAD": {
                "code": "CAD",
                "value": 1.337287
            },
            "CDF": {
                "code": "CDF",
                "value": 2045.002046
            },
            "CHF": {
                "code": "CHF",
                "value": 0.889341
            },
            "CLF": {
                "code": "CLF",
                "value": 0.02858
            },
            "CLP": {
                "code": "CLP",
                "value": 788.621483
            },
            "CNY": {
                "code": "CNY",
                "value": 6.93331
            },
            "COP": {
                "code": "COP",
                "value": 4549.756489
            },
            "CRC": {
                "code": "CRC",
                "value": 537.487624
            },
            "CUC": {
                "code": "CUC",
                "value": 1.004954
            },
            "CUP": {
                "code": "CUP",
                "value": 24.016364
            },
            "CVE": {
                "code": "CVE",
                "value": 100.850103
            },
            "CZK": {
                "code": "CZK",
                "value": 21.36103
            },
            "DJF": {
                "code": "DJF",
                "value": 177.720287
            },
            "DKK": {
                "code": "DKK",
                "value": 6.77951
            },
            "DOP": {
                "code": "DOP",
                "value": 54.500064
            },
            "DOT": {
                "code": "DOT",
                "value": 0.18222
            },
            "DZD": {
                "code": "DZD",
                "value": 135.657231
            },
            "EGP": {
                "code": "EGP",
                "value": 30.894433
            },
            "ERN": {
                "code": "ERN",
                "value": 15.000022
            },
            "ETB": {
                "code": "ETB",
                "value": 54.200057
            },
            "ETH": {
                "code": "ETH",
                "value": 0.000541
            },
            "EUR": {
                "code": "EUR",
                "value": 0.910441
            },
            "FJD": {
                "code": "FJD",
                "value": 2.193053
            },
            "FKP": {
                "code": "FKP",
                "value": 0.791884
            },
            "GBP": {
                "code": "GBP",
                "value": 0.792018
            },
            "GEL": {
                "code": "GEL",
                "value": 2.500003
            },
            "GGP": {
                "code": "GGP",
                "value": 0.791884
            },
            "GHS": {
                "code": "GHS",
                "value": 11.800013
            },
            "GIP": {
                "code": "GIP",
                "value": 0.791884
            },
            "GMD": {
                "code": "GMD",
                "value": 59.850078
            },
            "GNF": {
                "code": "GNF",
                "value": 8655.015248
            },
            "GTQ": {
                "code": "GTQ",
                "value": 7.805623
            },
            "GYD": {
                "code": "GYD",
                "value": 211.658477
            },
            "HKD": {
                "code": "HKD",
                "value": 7.83229
            },
            "HNL": {
                "code": "HNL",
                "value": 24.650042
            },
            "HRK": {
                "code": "HRK",
                "value": 6.859718
            },
            "HTG": {
                "code": "HTG",
                "value": 147.611422
            },
            "HUF": {
                "code": "HUF",
                "value": 336.590361
            },
            "IDR": {
                "code": "IDR",
                "value": 14698.020149
            },
            "ILS": {
                "code": "ILS",
                "value": 3.647784
            },
            "IMP": {
                "code": "IMP",
                "value": 0.791884
            },
            "INR": {
                "code": "INR",
                "value": 81.920257
            },
            "IQD": {
                "code": "IQD",
                "value": 1310.001837
            },
            "IRR": {
                "code": "IRR",
                "value": 42275.057123
            },
            "ISK": {
                "code": "ISK",
                "value": 136.470185
            },
            "JEP": {
                "code": "JEP",
                "value": 0.791884
            },
            "JMD": {
                "code": "JMD",
                "value": 154.453565
            },
            "JOD": {
                "code": "JOD",
                "value": 0.709401
            },
            "JPY": {
                "code": "JPY",
                "value": 134.092184
            },
            "KES": {
                "code": "KES",
                "value": 136.700231
            },
            "KGS": {
                "code": "KGS",
                "value": 87.300123
            },
            "KHR": {
                "code": "KHR",
                "value": 4123.005903
            },
            "KMF": {
                "code": "KMF",
                "value": 449.150568
            },
            "KPW": {
                "code": "KPW",
                "value": 899.985205
            },
            "KRW": {
                "code": "KRW",
                "value": 1318.402578
            },
            "KWD": {
                "code": "KWD",
                "value": 0.306341
            },
            "KYD": {
                "code": "KYD",
                "value": 0.833913
            },
            "KZT": {
                "code": "KZT",
                "value": 444.378298
            },
            "LAK": {
                "code": "LAK",
                "value": 17480.026362
            },
            "LBP": {
                "code": "LBP",
                "value": 15270.017906
            },
            "LKR": {
                "code": "LKR",
                "value": 316.738998
            },
            "LRD": {
                "code": "LRD",
                "value": 166.500178
            },
            "LSL": {
                "code": "LSL",
                "value": 18.630021
            },
            "LTC": {
                "code": "LTC",
                "value": 0.012332
            },
            "LTL": {
                "code": "LTL",
                "value": 2.95274
            },
            "LVL": {
                "code": "LVL",
                "value": 0.60489
            },
            "LYD": {
                "code": "LYD",
                "value": 4.755008
            },
            "MAD": {
                "code": "MAD",
                "value": 10.013762
            },
            "MATIC": {
                "code": "MATIC",
                "value": 1.140045
            },
            "MDL": {
                "code": "MDL",
                "value": 17.812556
            },
            "MGA": {
                "code": "MGA",
                "value": 4410.008403
            },
            "MKD": {
                "code": "MKD",
                "value": 56.104654
            },
            "MMK": {
                "code": "MMK",
                "value": 2101.584313
            },
            "MNT": {
                "code": "MNT",
                "value": 3489.644695
            },
            "MOP": {
                "code": "MOP",
                "value": 8.072909
            },
            "MRO": {
                "code": "MRO",
                "value": 34.30005
            },
            "MUR": {
                "code": "MUR",
                "value": 45.250053
            },
            "MVR": {
                "code": "MVR",
                "value": 15.360023
            },
            "MWK": {
                "code": "MWK",
                "value": 1027.501666
            },
            "MXN": {
                "code": "MXN",
                "value": 17.552221
            },
            "MYR": {
                "code": "MYR",
                "value": 4.449507
            },
            "MZN": {
                "code": "MZN",
                "value": 63.250097
            },
            "NAD": {
                "code": "NAD",
                "value": 18.630031
            },
            "NGN": {
                "code": "NGN",
                "value": 462.500677
            },
            "NIO": {
                "code": "NIO",
                "value": 36.560064
            },
            "NOK": {
                "code": "NOK",
                "value": 10.501511
            },
            "NPR": {
                "code": "NPR",
                "value": 131.343964
            },
            "NZD": {
                "code": "NZD",
                "value": 1.569747
            },
            "OMR": {
                "code": "OMR",
                "value": 0.385036
            },
            "PAB": {
                "code": "PAB",
                "value": 1.00071
            },
            "PEN": {
                "code": "PEN",
                "value": 3.694007
            },
            "PGK": {
                "code": "PGK",
                "value": 3.525004
            },
            "PHP": {
                "code": "PHP",
                "value": 55.640096
            },
            "PKR": {
                "code": "PKR",
                "value": 284.500543
            },
            "PLN": {
                "code": "PLN",
                "value": 4.114008
            },
            "PYG": {
                "code": "PYG",
                "value": 7188.349632
            },
            "QAR": {
                "code": "QAR",
                "value": 3.641006
            },
            "RON": {
                "code": "RON",
                "value": 4.484014
            },
            "RSD": {
                "code": "RSD",
                "value": 106.752923
            },
            "RUB": {
                "code": "RUB",
                "value": 77.700095
            },
            "RWF": {
                "code": "RWF",
                "value": 1120.501507
            },
            "SAR": {
                "code": "SAR",
                "value": 3.750246
            },
            "SBD": {
                "code": "SBD",
                "value": 8.333926
            },
            "SCR": {
                "code": "SCR",
                "value": 13.172924
            },
            "SDG": {
                "code": "SDG",
                "value": 600.000979
            },
            "SEK": {
                "code": "SEK",
                "value": 10.218669
            },
            "SGD": {
                "code": "SGD",
                "value": 1.324602
            },
            "SHP": {
                "code": "SHP",
                "value": 1.216751
            },
            "SLL": {
                "code": "SLL",
                "value": 19750.019935
            },
            "SOL": {
                "code": "SOL",
                "value": 0.047732
            },
            "SOS": {
                "code": "SOS",
                "value": 568.0009
            },
            "SRD": {
                "code": "SRD",
                "value": 37.875055
            },
            "STD": {
                "code": "STD",
                "value": 20697.981008
            },
            "SVC": {
                "code": "SVC",
                "value": 8.756234
            },
            "SYP": {
                "code": "SYP",
                "value": 2512.536271
            },
            "SZL": {
                "code": "SZL",
                "value": 18.630023
            },
            "THB": {
                "code": "THB",
                "value": 33.640058
            },
            "TJS": {
                "code": "TJS",
                "value": 10.928131
            },
            "TMT": {
                "code": "TMT",
                "value": 3.510006
            },
            "TND": {
                "code": "TND",
                "value": 3.044503
            },
            "TOP": {
                "code": "TOP",
                "value": 2.340704
            },
            "TRY": {
                "code": "TRY",
                "value": 19.544722
            },
            "TTD": {
                "code": "TTD",
                "value": 6.793497
            },
            "TWD": {
                "code": "TWD",
                "value": 30.629436
            },
            "TZS": {
                "code": "TZS",
                "value": 2356.502847
            },
            "UAH": {
                "code": "UAH",
                "value": 36.771955
            },
            "UGX": {
                "code": "UGX",
                "value": 3719.713584
            },
            "USD": {
                "code": "USD",
                "value": 1
            },
            "UYU": {
                "code": "UYU",
                "value": 38.733915
            },
            "UZS": {
                "code": "UZS",
                "value": 11443.017501
            },
            "VEF": {
                "code": "VEF",
                "value": 2514768.746893
            },
            "VND": {
                "code": "VND",
                "value": 23472.537147
            },
            "VUV": {
                "code": "VUV",
                "value": 117.80498
            },
            "WST": {
                "code": "WST",
                "value": 2.694531
            },
            "XAF": {
                "code": "XAF",
                "value": 599.212614
            },
            "XAG": {
                "code": "XAG",
                "value": 0.039372
            },
            "XAU": {
                "code": "XAU",
                "value": 0.000492
            },
            "XCD": {
                "code": "XCD",
                "value": 2.702554
            },
            "XDR": {
                "code": "XDR",
                "value": 0.741659
            },
            "XOF": {
                "code": "XOF",
                "value": 596.501192
            },
            "XPF": {
                "code": "XPF",
                "value": 109.325172
            },
            "XRP": {
                "code": "XRP",
                "value": 2.311972
            },
            "YER": {
                "code": "YER",
                "value": 250.300484
            },
            "ZAR": {
                "code": "ZAR",
                "value": 18.863437
            },
            "ZMK": {
                "code": "ZMK",
                "value": 9001.2
            },
            "ZMW": {
                "code": "ZMW",
                "value": 18.23749
            },
            "ZWL": {
                "code": "ZWL",
                "value": 321.999592
            }
        }
    }

}
