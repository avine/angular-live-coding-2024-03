import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input() count = 0;

  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count += 1;
    this.countChange.emit(this.count);
  }
}
