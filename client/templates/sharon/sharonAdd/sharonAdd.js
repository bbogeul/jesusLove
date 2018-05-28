Template.sharonAdd.helpers ({
  SharonNews: function() {
    return SharonNews.find({},{ sort: { createdAt: -1 } }).fetch();;
    
  }
});
Template.sharonAdd.helpers({
   dateInput: function() {
	return moment(this.dateInput).format('MM/D/YYYY');
} 
});
Template.sharonAdd.onCreated(function(){
  this.SharonNews = this.subscribe( 'SharonNews' );
});
  Template.sharonAdd.events({
 

    "click .removeChart": function () {
      SharonNews.remove(this._id);
    }
  });