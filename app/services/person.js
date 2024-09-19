import Service from '@ember/service';
import Person from 'starwars/models/person';

export default class PersonService extends Service {
  person = {};

  async loadPerson(url) {
    const request = await fetch(url).then((response) => response.json());

    return (this.person = new Person(request));
  }
}
