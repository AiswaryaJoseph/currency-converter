import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  amounts: any
  transform(amount: number, fromCurrency: string, toCurrency: string): number {
    // const amounts = amount;
    // Implement your currency conversion logic here
    // You can use exchange rates API or predefined conversion rates
    // For simplicity, let's assume 1 USD = 0.85 EUR and 1 USD = 0.72 GBP

   if (fromCurrency === 'USD' && toCurrency === 'EUR') {
      this.amounts = amount * 0.94 
      return this.amounts.toFixed(2) ;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
      this.amounts = amount / .94
      return this.amounts.toFixed(2);
    }
    else if (fromCurrency === 'INR' && toCurrency === 'USD') {
      this.amounts = amount / 82.6
      return this.amounts.toFixed(2);
    } else if (fromCurrency === 'USD' && toCurrency === 'INR') {
      this.amounts = amount * 82.6
      return this.amounts.toFixed(2);
    }
    else if (fromCurrency === 'EUR' && toCurrency === 'INR') {
      this.amounts = amount * 88.32
      return this.amounts.toFixed(2);
    } else if (fromCurrency === 'INR' && toCurrency === 'EUR') {
      this.amounts = amount / 88.32
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'INR' && toCurrency === 'KWD'){
      this.amounts = amount / 268.38
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'KWD' && toCurrency === 'INR'){
      this.amounts = amount * 268.38
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'KWD' && toCurrency === 'USD'){
      this.amounts = amount / .31
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'USD' && toCurrency === 'KWD'){
      this.amounts = amount * .31
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'KWD' && toCurrency === 'EUR'){
      this.amounts = amount * 3.04
      return this.amounts.toFixed(2);
    }else if(fromCurrency === 'EUR' && toCurrency === 'KWD'){
      this.amounts = amount / 3.04
      return this.amounts.toFixed(2);
    }

    return amount;
  }
}
