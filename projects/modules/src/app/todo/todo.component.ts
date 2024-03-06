import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnDestroy {
  private activatedRoute = inject(ActivatedRoute);

  private subscription = this.activatedRoute.params.pipe(map((params) => params['id'])).subscribe(console.log);

  constructor() {
    console.log('Snapshot: params', this.activatedRoute.snapshot.params);
    console.log('Snapshot: queryParams', this.activatedRoute.snapshot.queryParams);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
