import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
	emails: Array<any>
  constructor() { }

  ngOnInit() {
  	this.emails = [
  	{address: "bill@gates.com", importance: true, subject: "New Windows", content: "Windows XI will launch in 2100."},
  	{address: "ada@lovelace.com", importance: true, subject: "Programming", content: "Enchantrees of Numbers."},
  	{address: "john@carmac.com", importance: false, subject: "Updated Algo", content: "New algorithm for shadow volumes."},
  	{address: "gabe@newell.com", importance: false, subject: "HL3!", content: "Just kidding..."},
  	]
  }

}
