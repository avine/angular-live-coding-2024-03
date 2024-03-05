import { ClassProvider, InjectionToken, NgModule, ValueProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DataAltService, DataService } from './data/data.service';
import { IncrementComponent } from './increment/increment.component';

export const FOO = new InjectionToken<string>('the foo');

const fooProvider: ValueProvider = {
  provide: FOO,
  useValue: 'Hello world',
};

const dataServiceProvider: ClassProvider = {
  provide: DataService, // TOKEN
  useClass: DataAltService, // SERVICE
};

@NgModule({
  declarations: [AppComponent, CounterComponent, IncrementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [fooProvider, dataServiceProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
