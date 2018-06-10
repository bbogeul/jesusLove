Template.prayerList.helpers ({
 
  PrayerList: function() {
    return PrayerList.find({},{sort: {createdAt:1}}).fetch();;
    
  },
  	users:function () {
	return Meteor.users.find({_id:{$ne:Meteor.userId()}});
},

     dateInput: function() {
	return moment(this.dateInput).format('MM/DD/YYYY');
},

       createdAt: function() {
	return moment(this.createdAt).format('MM/DD/YYYY');
}
});

Template.prayerList.events({
 

    "click .removePrayer": function () {
      PrayerList.remove(this._id);
      Bert.alert( '삭제되었습니다', 'danger', 'growl-top-right', 'fa-check' );
    }
  });
 