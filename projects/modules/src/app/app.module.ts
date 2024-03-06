import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AltComponent } from './parent/alt/alt.component';
import { ChildComponent } from './parent/child/child.component';
import { Child2Component } from './parent/child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    AltComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
