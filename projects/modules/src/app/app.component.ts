import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'modules';

  show = true;

  data = 'Hello';

  @ViewChild(ChildComponent) childCmp?: ChildComponent;

  constructor() {
    console.log('Parent: contructor');
  }

  ngOnInit(): void {
    console.log('Parent: OnInit', this.childCmp);
  }

  ngAfterViewInit(): void {
    console.log('Parent: AfterViewInit', this.childCmp);
  }

  ngOnDestroy(): void {
    throw new Error('Not called.');
  }
}
