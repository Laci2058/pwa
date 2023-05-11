import { Injectable } from '@angular/core';
import { from, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ValutaService {

    constructor() { }

    getData() {
        /* let xhr = new XMLHttpRequest()
 
          xhr.open('GET', 'http://api.napiarfolyam.hu?bank=kh&valuta=eur&datum=20230505&datumend=20230511&valutanem=valuta')
          xhr.setRequestHeader('Referrer-Policy', 'origin')
          xhr.send()*/


        /*  fetch('http://api.napiarfolyam.hu?bank=kh&valuta=eur&datum=20230505&datumend=20230511&valutanem=valuta',
              {
                  method:'GET',
                  mode:'no-cors',
                  referrerPolicy: "no-referrer",
                  headers: {
                      'Access-Control-Allow-Origin':'localhost:4200',
                  }
              })*/
    }
}
