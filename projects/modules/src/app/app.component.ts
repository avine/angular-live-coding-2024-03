import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputValue = 'Stéphane';

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.inputValue = inputElement.value;
  }
}
