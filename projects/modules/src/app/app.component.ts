import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HighlightDirective) highlightDirective!: HighlightDirective;

  ngAfterViewInit(): void {
    console.log(this.highlightDirective);
  }
}
