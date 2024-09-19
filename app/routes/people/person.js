import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PeoplePersonRoute extends Route {
  @service person;
  async model(params) {
    const people = this.modelFor('people');

    const person = people.find((person) => person.name === params.id);

    return await this.person.loadPerson(person.url);
  }
}
