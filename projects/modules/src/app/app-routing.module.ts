import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { auth2Guard } from './auth2.guard';
import { HomeComponent } from './home/home.component';
import { AltComponent } from './parent/alt/alt.component';
import { ChildComponent } from './parent/child/child.component';
import { Child2Component } from './parent/child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'todo/:id',
    component: TodoComponent,
    title: 'Todo',
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
      {
        path: 'child2',
        component: Child2Component,
        canMatch: [auth2Guard],
      },
      {
        path: 'child2',
        component: AltComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
