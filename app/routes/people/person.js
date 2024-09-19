import Route from '@ember/routing/route';

export default class PeoplePersonRoute extends Route {
  model(params) {
    const people = this.modelFor('people');

    return people.find((person) => person.name === params.id);
  }
}
