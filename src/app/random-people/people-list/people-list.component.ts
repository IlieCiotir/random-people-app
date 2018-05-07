import { Component, OnInit } from '@angular/core';
import { RandomPeopleService } from '../service/random-people.service';
import { Person } from '../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public persons: Person[] = [];
  public loading = false;
  constructor(private peopleService: RandomPeopleService) { }

  ngOnInit() {
    this.peopleService.people$.subscribe(persons => {
      this.persons.push(...persons);
      this.loading = false;
    });
    this.peopleService.generateMorePeople();
  }

  public addMorePeople() {
    this.peopleService.generateMorePeople();
    this.loading = true;
  }

  public remove(index: number) {
    this.persons.splice(index, 1);
  }
}
