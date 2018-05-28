 Template.editWelcome.helpers({
   AboutList: function() {
    return AboutChurch.find({},{ sort: { createdAt: -1 }, limit: 1 }).fetch();;
    
  }
 });
Template.editText.helpers({
   dateFormat: function() {
	return moment(this.createdAt).format('MM/D/YYYY');
} 
});