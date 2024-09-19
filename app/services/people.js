import Service from '@ember/service';

export default class PeopleService extends Service {
  people = [];

  constructor() {
    super(...arguments);
  }

  async loadPeople() {
    const request = await fetch('https://swapi.dev/api/people').then(
      (response) => response.json(),
    );

    this.people = request.results;
    // for (let person of request.results) {
    //   this.people.push(person);
    // }

    return this.people;
  }
}
