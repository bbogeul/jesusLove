
 Meteor.publish('theSList', function() {
    return SharonNews.find({});
}); 
 Meteor.publish('theQList', function() {
    return qtWords.find({});
});
 Meteor.publish('thePList', function() {
    return PrayerList.find({});
});
Meteor.publish('theCList', function() {
    return ChurchNews.find({});
}); 
Meteor.publish('allUsers', function() {
	if(Roles.userIsInRole(this.userId, 'admin')) {
	  return Meteor.users.find({});
	}
  });
//methods//

Meteor.methods({
	'submitSharon': function (sharonInsert) {
        SharonNews.insert(sharonInsert);
		console.log('new sharonMusic:', sharonInsert);
		 
	} 
});
Meteor.methods({
	'submitQt': function (qtInsert) {
        qtWords.insert(qtInsert);
		console.log('new qt:', qtInsert);
		 
	} 
});
Meteor.methods({
	'submitPrayer': function (prayerInsert) {
        PrayerList.insert(prayerInsert);
		console.log('new prayer:', prayerInsert);
		 
	} 
});
Meteor.methods({
	'submitNews': function (newsInsert) {
        ChurchNews.insert(newsInsert);
		console.log('new church news:', newsInsert);
		 
	} 
});