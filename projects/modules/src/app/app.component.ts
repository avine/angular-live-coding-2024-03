import { Component, Inject, inject } from '@angular/core';
import { FOO } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  foo = inject(FOO);

  constructor(@Inject(FOO) public fooCopy: string) {}
}
