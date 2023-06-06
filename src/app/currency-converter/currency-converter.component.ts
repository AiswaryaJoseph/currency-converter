import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  amount: number=0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  }
