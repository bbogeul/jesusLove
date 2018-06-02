AutoForm.addHooks(['insertPrayerList'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 기도제목 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});
Template.prayerList.helpers({
  
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
