import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes: string[];

  constructor(){
    this.quotes = ['What\'s coming is better than what\'s gone, \'Love is a scam']
  }
}
