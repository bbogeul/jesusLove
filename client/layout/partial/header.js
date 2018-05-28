Template.header.rendered = function() {
     $(".button-collapse").sideNav();
     $(".button-collapse").sideNav({closeOnClick: true});
    $(".menuOpen").sideNav();
     $(".menuOpen").sideNav({closeOnClick: true});
     $(".topButton").sideNav({closeOnClick: true});
   
}
Template.loginList.rendered = function() {
 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover:false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true,
 
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
}
Template.footer.events({
 
	'click .logout': ()=> {
		Meteor.logout();
	}
});

Template.loginList.events({
 
	'click .logout': ()=> {
		Meteor.logout();
	}
});
Template.header.events({
 
	'click .logout': ()=> {
		Meteor.logout();
	}
});
 
 