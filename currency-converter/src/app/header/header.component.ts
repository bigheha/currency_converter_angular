import { Component, OnInit } from '@angular/core';
import { GetQuotesService } from '../get-quotes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currenciesData: any;

  constructor(private GetQuotesService: GetQuotesService) {}

  ngOnInit(): void {
    this.GetQuotesService.getData().subscribe((data) => {
      console.log(data);
      this.currenciesData = data;
    });
  }
}
