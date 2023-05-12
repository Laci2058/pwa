import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValutaApiResponse } from '../models/valuta-api';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ValutaService {
    constructor(private http: HttpClient) { }


    url = 'https://api.currencyapi.com/v3/latest?apikey=7W5Cymeen3mYa8KycJDEM117lOL1VOUbM8vJ0pLL&currencies=HUF'
    //'https://api.currencyapi.com/v3/latest?apikey=7W5Cymeen3mYa8KycJDEM117lOL1VOUbM8vJ0pLL&currencies=HUF'
    //'https://api.currencyapi.com/v3/latest?apikey=7W5Cymeen3mYa8KycJDEM117lOL1VOUbM8vJ0pLL&currencies=HUF&base_currency=USD'

    getData(fromCurrency:string ='EUR', toCurrency: string = 'HUF') {
        return this.http.get<ValutaApiResponse>(`https://api.currencyapi.com/v3/latest?apikey=${environment.API_KEY}&currencies=${toCurrency}&base_currency=${fromCurrency}`)
    }
}
