export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

     // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 2000;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/bookings', function({bookings}, req) {
    if (req.queryParams.bookingRef) {
      const bookingRef = req.queryParams.bookingRef;
      const booking  = bookings.findBy({ bookingRef });
      return this.serialize(booking)
    } else {
      return this.serialize(bookings.all());
    }
  });
  this.get('/bookings/:id');
  this.patch('/bookings/:id');

  this.get('/meals');
  this.get('/guests/:id');
  this.patch('/guests/:id');

  this.urlPrefix = 'https://qoj8j8r0x4.execute-api.eu-west-2.amazonaws.com';
  this.passthrough('/production')
}
