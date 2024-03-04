import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data?: string;

  timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  constructor() {
    console.log('Child: contructor', this.data);
  }

  ngOnInit(): void {
    console.log('Child: OnInit', this.data);
  }

  ngAfterViewInit(): void {
    console.log('Child: AfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('Child: OnDestroy');

    clearInterval(this.timer);
  }
}
