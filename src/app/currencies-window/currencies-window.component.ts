import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../get-quotes.service';

@Component({
  selector: 'app-currencies-window',
  templateUrl: './currencies-window.component.html',
  styleUrls: ['./currencies-window.component.css'],
})
export class CurrenciesWindowComponent implements OnInit {
  currenciesData: any = {};

  currency1code: string = 'USD';
  currency2code: string = 'UAH';

  currency1rate: number = 0;
  currency2rate: number = 0;

  currency1amount: number = 0;
  currency2amount: number = 0;

  constructor(private GetQuotesService: GetQuotesService) {}
  ngOnInit(): void {
    this.GetQuotesService.getData().subscribe((data) => {
      this.currenciesData = data;
    });
  }

  setCode1(code: any): void {
    this.currency1code = code.value;
    this.convert1(this.currency1amount);
  }
  setCode2(code: any): void {
    this.currency2code = code.value;
    this.convert2(this.currency2amount);
  }

  convert1(target: any): void {
    this.currency1rate = this.currenciesData.data[this.currency1code].value;
    this.currency2rate = this.currenciesData.data[this.currency2code].value;

    const rate = this.currency2rate / this.currency1rate;

    if (typeof target === 'number') {
      this.currency1amount = target;
    } else if (typeof target === 'string') {
      this.currency1amount = parseInt(target);
    } else {
      this.currency1amount = target.value;
    }

    this.currency2amount = parseFloat((this.currency1amount * rate).toFixed(2));
  }

  convert2(target: any): void {
    this.currency1rate = this.currenciesData.data[this.currency1code].value;
    this.currency2rate = this.currenciesData.data[this.currency2code].value;

    const rate = this.currency1rate / this.currency2rate;

    if (typeof target === 'number') {
      this.currency2amount = target;
    } else if (typeof target === 'string') {
      this.currency2amount = parseFloat(target);
    } else {
      this.currency2amount = target.value;
    }

    this.currency1amount = parseFloat((this.currency2amount * rate).toFixed(2));
  }
}
