import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data: Array<{
    country: string;
    capital: string;
  }> = [
    {
      country: 'Poland',
      capital: 'Warsaw',
    },
    {
      country: 'Germany',
      capital: 'Berlin',
    },
    {
      country: 'Azerbaijan',
      capital: 'Baku',
    },
    {
      country: 'Papua New Guinea',
      capital: 'Port Moresby',
    },
  ];
}
