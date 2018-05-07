import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RandomPeopleService } from './service/random-people.service';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PeopleListComponent],
  providers: [RandomPeopleService],
  exports: [PeopleListComponent]
})
export class RandomPeopleModule { }
