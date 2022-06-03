import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 
  
  constructor(private http: HttpClient) {}

  direcionar() {
    console.log("entrou no direcionar")
    this.scrollToBottom()
  }

  scrollToBottom(){
    const inputConverter = document.getElementById("inputConverter");
    inputConverter && inputConverter.scrollIntoView(false);
  }
  
  
  ngOnInit(){
    
  }
}
