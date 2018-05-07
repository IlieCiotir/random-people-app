import { RandomPeopleModule } from './random-people.module';

describe('RandomPeopleModule', () => {
  let randomPeopleModule: RandomPeopleModule;

  beforeEach(() => {
    randomPeopleModule = new RandomPeopleModule();
  });

  it('should create an instance', () => {
    expect(randomPeopleModule).toBeTruthy();
  });
});
