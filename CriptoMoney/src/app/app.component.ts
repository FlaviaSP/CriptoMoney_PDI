import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Moeda {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number
  price_change_percentage_24h: number
  total_volume: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 
  @Input()
  valor?: number 
  
  @Input()
  moeda: string = 'brl'

  moedas: Moeda[] = []
  titulos: string[]= [
    'Coin',
    'Price',
    'Price Change',
    '24h Volume',
  ]

  constructor(private http: HttpClient) {}

  regraDeTres(valorTotalMoeda:number, valorDoInput:number){
    return valorDoInput/valorTotalMoeda;
  }
  converter(){
    this.http.get<Moeda[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + this.moeda + '&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .subscribe(
      (res) => {
          console.log(res);
          for (const m of res) {
            console.log(m.current_price);
            m.current_price = this.regraDeTres(m.current_price, this.valor??0)

          }
          this.moedas = res
      },
      (err) => console.log(err)
    )
  }
  ngOnInit(){
    
  }
}
