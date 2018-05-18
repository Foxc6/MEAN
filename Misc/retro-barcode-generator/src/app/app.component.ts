import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Barcode Generator';
  colors: Array<string> = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', '#00CED1', '#ADFF2F', 'black']
  boxes = new Array(10)

  randomColor(){
    for(let i=0; i<this.boxes.length; i++){
      var color = this.colors[Math.floor(Math.random() * 10)];
    }
    return color;
  }

}
