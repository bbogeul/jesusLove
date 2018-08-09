if (Meteor.isClient) {
  Meteor.subscribe('theSList');
  Meteor.subscribe('theQList');
  Meteor.subscribe('thePList');
  Meteor.subscribe('theCList');
  Meteor.subscribe('userPresence');
}