Template.dashboardLayout.helpers({
  
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