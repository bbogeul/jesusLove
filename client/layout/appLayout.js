Template.appLayout.rendered = function() {
    
 
}
Template.loginList.helpers({
  
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
      lastName: function() {
    return Meteor.user().profile.lastName;
  },
   userEmail: function() {
    return Meteor.user().emails[0].address;
  } 
});
Template.loginPage.helpers({
  
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
      lastName: function() {
    return Meteor.user().profile.lastName;
  },
   userEmail: function() {
    return Meteor.user().emails[0].address;
  } 
});
Template.header.helpers({
  
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
      lastName: function() {
    return Meteor.user().profile.lastName;
  },
   userEmail: function() {
    return Meteor.user().emails[0].address;
  } 
});