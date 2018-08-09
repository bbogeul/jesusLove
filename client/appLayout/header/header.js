Template.header.rendered = function() {
  new WOW().init({ mobile:    false}); 
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
}

Template.header.events({
 
	'click .logoutHeader': ()=> {
		Meteor.logout();
    Bert.alert( '로그아웃되셨습니다', 'danger', 'growl-top-right', 'fa-check' );
	}
});
Template.header2.events({
 
	'click .logoutHeader': ()=> {
		Meteor.logout();
    Bert.alert( '로그아웃되셨습니다', 'danger', 'growl-top-right', 'fa-check' );
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
Template.header2.helpers({
  
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