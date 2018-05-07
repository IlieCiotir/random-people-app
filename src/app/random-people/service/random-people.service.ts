import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person, Result } from '../model/people';


@Injectable({
  providedIn: 'root'
})
export class RandomPeopleService {

  public people$: EventEmitter<Person[]> = new EventEmitter<Person[]>();

  constructor(private httpClient: HttpClient) { }

  public generateMorePeople() {
    this.httpClient.get<Result>(`https://randomuser.me/api`, {
      params: {
        results: '5'
      }
    })
      .subscribe(result => {
        this.people$.emit(result.results);
      });
  }
}
