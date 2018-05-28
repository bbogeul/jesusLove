 
Template.qtShow.rendered = function() {
     new WOW().init({ mobile:    false}); 
     $('.parallax').parallax(); 
    $('ul.tabs').tabs();
}
Template.qtShow.helpers({
   dateInput: function() {
	return moment(this.dateInput).format('MM월/DD일/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM월/DD일/YYYY');
} 
});