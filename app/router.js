import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path:'/'}, function () {
    this.route('booking', {path: '/:id'}, function () {
      this.route('guests');
      this.route('information');
      this.route('pick-meal');
      this.route('confirmation');
    })
  });
});

export default Router;
