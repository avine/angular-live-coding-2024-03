import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = [
    { id: 1, name: 'P1' },
    { id: 2, name: 'P2' },
  ];
}
