import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({
    required: true,
    transform: (value: number | string): number => Number(value),
  })
  public count: number = 0;

  @Output() public countChange = new EventEmitter<number>();

  protected increment() {
    this.count += 1;
    this.countChange.emit(this.count);
  }
}
