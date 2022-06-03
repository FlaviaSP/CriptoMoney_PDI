import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Valor {
  name: string;
  type: string;
  unit: string;
  value: number;
}

@Component({
  selector: 'app-tela-cambio',
  templateUrl: './tela-cambio.component.html',
  styleUrls: ['./tela-cambio.component.css']
})
export class TelaCambioComponent implements OnInit {

valores: Valor[] = []

  constructor(private http: HttpClient) { }
 

  ngOnInit(): void {
    this.http.get<Valor[]>('https://api.coingecko.com/api/v3/exchange_rates')
    .subscribe(
      res => {console.log(res)
              this.valores = res}, 
      err => console.log(err) )
  } 

}
