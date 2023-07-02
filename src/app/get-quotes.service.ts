import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetQuotesService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://api.currencyapi.com/v3/latest?apikey=P1tg1yeZyqoa2VpIIrIb5747U5azOOt96reVJ8KO&base_currency=UAH'
    );
  }
}
