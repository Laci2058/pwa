import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValutaApiResponse } from '../models/valuta-api';
import { environment } from '../../environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ValutaService {
    constructor(private http: HttpClient) { }

    getData(fromCurrency: string = 'EUR', toCurrency: string = 'HUF') {
        let url = `https://api.currencyapi.com/v3/latest?apikey=${environment.API_KEY}&currencies=${toCurrency}&base_currency=${fromCurrency}`
        return this.http.get<ValutaApiResponse>(url)
            .pipe(
                catchError(this.handleError)
            )
    }
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
