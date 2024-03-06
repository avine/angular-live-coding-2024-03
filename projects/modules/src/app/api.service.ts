import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  todo = signal<Todo | undefined>(undefined);

  getTodo(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
      map((todo) => ({ ...todo, coucou: true })),
      tap((todoWithCoucou) => {
        this.todo.set(todoWithCoucou);
      }),
    );
  }
}
