export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.loadFixtures('meals');
  const guests = server.createList('guest', 4);
  const guestIds = guests.map(guest => guest.id);
  server.create('booking', {
    bookingRef: 'Z11',
    guestIds
  })
}
