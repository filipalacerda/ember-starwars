import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PeopleRoute extends Route {
  @service people;

  async model() {
    return await this.people.loadPeople();
  }
}
