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

  AutoForm.addHooks(['insertSharonForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 악보 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});
  AutoForm.addHooks(['updateSharonForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 악보 수하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});