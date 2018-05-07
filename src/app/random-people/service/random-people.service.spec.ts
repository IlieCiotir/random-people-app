import { TestBed, inject } from '@angular/core/testing';

import { RandomPeopleService } from './random-people.service';

describe('RandomPeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomPeopleService]
    });
  });

  it('should be created', inject([RandomPeopleService], (service: RandomPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
