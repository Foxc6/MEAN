import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
	quotes = []
	quote = {
		content: '',
		author: '',
		votes: 0
	}

	addQuote(){
		this.quotes.push(this.quote)
		this.quote = {
			content: '',
			author: '',
			votes: 0
		}
	}

	upVote(quote){
		quote.votes++
		this.quotes.sort((a, b)=>{
		  return b.votes - a.votes;
		})
	}

	downVote(quote){
		quote.votes--
		this.quotes.sort((a, b)=>{
		  return b.votes - a.votes;
		})
	}

	deleteVote(quote){
		this.quotes.splice(this.quotes[quote], 1)
	}

  constructor() { }

  ngOnInit() {
  }

}
