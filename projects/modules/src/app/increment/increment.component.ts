import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css',
})
export class IncrementComponent {
  constructor(protected dataService: DataService) {}
}
