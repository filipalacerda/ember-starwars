import Service from '@ember/service';
import Person from 'starwars/models/person';

export default class PeopleService extends Service {
  people = [];

  constructor() {
    super(...arguments);
  }

  async loadPeople() {
    const request = await fetch('https://swapi.dev/api/people').then(
      (response) => response.json(),
    );

    for (let person of request.results) {
      this.people.push(new Person(person));
    }

    return this.people;
  }

  add(record) {
    const recordIds = this.people.map((record) => record.id);

    if (!recordIds.includes(record.id)) {
      this.people.push(record);
    }
  }
}
