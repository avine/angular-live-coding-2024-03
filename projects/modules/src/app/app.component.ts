import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  now = Date.now();

  arr = ['a', 'b', 'c'];

  add() {
    this.arr.push('NEW');

    //this.arr = [...this.arr, 'NEW'];

    console.log(this.arr);
  }
}
