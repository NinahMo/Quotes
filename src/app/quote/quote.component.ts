import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() {}

  quoteModel: Quote

  showNew: boolean = false;

  submitType = 'save';

  quotes = [
    new Quote("Raha jipe mwenyewe", "Anonymous", "Ninah", 0, 0),
    new Quote("What\'s coming is better than what\'s gone", "McEddie", "User1", 0, 0)
  ];

  ngOnInit(): void {
  }

}
