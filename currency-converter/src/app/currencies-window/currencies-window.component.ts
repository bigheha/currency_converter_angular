import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../get-quotes.service';

@Component({
  selector: 'app-currencies-window',
  templateUrl: './currencies-window.component.html',
  styleUrls: ['./currencies-window.component.css'],
})
export class CurrenciesWindowComponent implements OnInit {
  currenciesData: any;

  currency1code: string = '';
  currency2code: string = '';

  currency1rate: number = 0;
  currency2rate: number = 0;

  constructor(private GetQuotesService: GetQuotesService) {}

  ngOnInit(): void {
    this.GetQuotesService.getData().subscribe((data) => {
      console.log(data);
      this.currenciesData = data;
    });
  }
}
