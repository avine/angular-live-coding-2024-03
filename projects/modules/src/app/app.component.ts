import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // private httpClient = inject(HttpClient);

  private apiService = inject(ApiService);

  protected todo = this.apiService.todo;

  constructor() {
    /*
    this.httpClient
      .request(new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1'))
      .subscribe((httpEvent) => {
        if (httpEvent.type !== HttpEventType.Response) {
          return;
        }
        console.log(httpEvent.body);
      });

    this.httpClient.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').subscribe((todo) => {
      this.todo = todo;
    });
    */
  }

  ngOnInit(): void {
    this.apiService.getTodo(2).subscribe();
  }
}
