if (Meteor.isClient) {

	 Session.setDefault("limit",0);
    Deps.autorun (function ()  {
         Meteor.subscribe('allUsers',Session.get("limit"))
             } );
 Meteor.subscribe('userPresence');
}
Template.Users.helpers({
	
	users:function () {
	return Meteor.users.find({_id:{$ne:Meteor.userId()}});
},

userEmail: function () {
	return this.emails[0].address;
},
isAdmin: function () {
	return Roles.userIsInRole(this._id, 'normal');
},
dateFormat: function() {
	return moment(this.createdAt).format('MMMM D YYYY');
}
});
Template.Users.events({
	'click .user_id': function() {
		console.log(this);
		Session.set('currentUser', this);
	},
	 
	'click .toggle-admin': function () {
 	Meteor.call('toggleAdmin', this._id);
	},
	'click .user_idR': function () {
 	  Meteor.call('removeAdmin', this._id);
	}
})
 