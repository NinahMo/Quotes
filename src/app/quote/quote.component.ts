import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title: 'quotes';
  quotes: string[];

  constructor() {
    this.quotes = ['What\'s coming is better than what\'s gone, \'Love is a scam']
   }

  ngOnInit(): void {
  }

}
