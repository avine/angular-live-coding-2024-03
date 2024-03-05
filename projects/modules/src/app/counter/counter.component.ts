import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  protected count = this.dataService.count;

  constructor(private dataService: DataService) {}
}
