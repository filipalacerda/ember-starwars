import EmberRouter from '@ember/routing/router';
import config from 'starwars/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('people', function () {
    this.route('person', {
      path: ':id',
    });
  });
  this.route('planets');
});
