import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 process.env.MAIL_URL='smptp://postmaster%sandboxe579574d0e564bf0a26527dbba7e0da5.mailgun.org:5c296f91e0681050387548aff2b4d178-b6183ad4-635ce8a2@smptp.mailgun.org:587';
    
});

//email
Meteor.methods({
    'sendEmail': function(to,subj,text){
        this.unblock();
        
        Email.send({
            to:to,
            from:'no-reply@yourdomain.com',
            subject: subj,
            text: text
        })
    }
})


if (Meteor.isServer) {
    
Meteor.publish('userPresence', function() {
    
  var filter = { userId: { $exists: true }};

  return Presences.find(filter, { fields: { state: true, userId: true, firstName: true }});
});
  
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
  Meteor.publish('thePLList', function() {
    return PrayerList.find({});
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






