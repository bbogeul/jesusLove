Template.footer.events({
 
	'click .logoutFooter': ()=> {
		Meteor.logout();
    Bert.alert( '로그아웃되셨습니다', 'danger', 'growl-top-right', 'fa-check' );
	}
});

Template.footer.rendered = function () {
    new WOW().init({ mobile:    false}); 
}