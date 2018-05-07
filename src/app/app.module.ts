import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomPeopleModule } from './random-people/random-people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RandomPeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
