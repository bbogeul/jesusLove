import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    /**
     * This will create the initial admin user.  This will only work if one does not presently exist, if one does exist it will throw an error.
     * @param email
     * @param password
     */
    createInitialAdminUser: function (email, password) {
        if (Roles.getUsersInRole('admin', null, {reactive: false, limit: 1}).count() != 0) {
            throw new Meteor.Error("An existing admin user is already present");
        }
        var userId = Accounts.createUser({email: email, password: password});
        Roles.addUsersToRoles(userId, ['admin']);
    },
    /**
     * 
     * @returns {boolean} true if there is at least one admin user
     */
    hasAdminUser: function() {
        var c = Roles.getUsersInRole('admin', null, {reactive: false, limit: 1}).count();
        return c != 0;
    }
});
});


if (Meteor.isServer) {
  Meteor.publish('theAList', function() {
    return AboutChurch.find({});
});  
  Meteor.publish('theSList', function(skipCount) {
    return SharonNews.find({},{limit:10,skip:skipCount});
});

Meteor.publish('allUsers', function() {
  if(Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({});
  }
});
  Meteor.publish('theWordOfTheWeek', function() {
    return WordForTheWeek.find({});
}); 
 

 Meteor.publish('theQList', function(limitCount) {
    return qtWords.find({},{limit:6,limit:limitCount});
});  
 Meteor.publish('thePList', function( ) {
    return PrayerList.find({});
});     
  Meteor.publish('theSr1List', function() {
    return Sermon1.find({});
}); 
    

   
  Meteor.publish('theSr2List', function() {
    return Sermon2.find({});
}); 
   Meteor.publish('theJuboList', function() {
    return AddJubo.find({});
}); 
     Meteor.publish('theJuboList2', function() {
    return AddJubo2.find({});
}); 
       
     Meteor.publish('theServiceMembersList', function() {
    return ServiceMembers.find({});
});
    Meteor.publish('theServiceDate', function() {
    return DateForService.find({});
}); 

}
//methods
Meteor.methods({
	'submitWelcome': function (rsvp) {
        AboutChurch.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});
Meteor.methods({
	'submitSharon': function (rsvp) {
        SharonNews.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});
Meteor.methods({
	'submitSharonListing': function (rsvp) {
        SharonNews2.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});
Meteor.methods({
	'submitQtListing': function (rsvp) {
        qtWords.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 

});
Meteor.methods({
	'submitAddListing': function (rsvp) {
        AddJubo.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});
Meteor.methods({
	'submitServiceMembers': function (rsvp) {
        ServiceMembers.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 

});
Meteor.methods({
	'submitServiceDate': function (rsvp) {
        DateForService.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});
Meteor.methods({
	'submitAddListing2': function (rsvp) {
        AddJubo2.insert(rsvp);
		console.log('new Welcome:', rsvp);
		 
	} 
});






