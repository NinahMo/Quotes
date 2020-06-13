import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() {}

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteModel: Quote

  showNew: boolean = false;

  submitType = 'save';

  quotes = [
    new Quote("Raha jipe mwenyewe", "Anonymous", "Ninah", 0, 0, new Date(2020,6,13)),
    new Quote("Stop killing us, our lives matter", "BLM", "User1", 0, 0, new Date(2020,6,4)),
    new Quote("Tout est beau tant que tu l'impose", "Willy William", "Mozzy", 0, 0, new Date(2018,7,21)),
    new Quote("Inauma but itabidi uzoee", "Simple Boy", "Stivo", 0, 0, new Date(2019,8,10))
  ];

  onNew() {
    this.quoteModel = new Quote('', '', '', 0, 0, new Date());
    this.showNew = true;
    this.submitType = 'save';
  }
  onSave() {
    if (this.submitType === 'save') {
      this.quotes.push(this.quoteModel);
    }
    this.showNew = false;
  }
  onCancel() {
    this.showNew = false;
  }
  delete(i) {
    this.quotes.splice(i, 1);
  }

  ngOnInit(): void {
  }

}
