 
Template.qt.rendered = function() {
     new WOW().init({ mobile:    false}); 
     $('.parallax').parallax();        
}

Template.qt.helpers ({
  qtWords: function() {
    return qtWords.find({},{ sort: { dateInput: -1 } }).fetch();;
    
  },
 qtWordsCount: function() {
    return qtWords.find({}).count()
    
  }
});
Template.qt.onCreated(function(){
  this.qtWords = this.subscribe( 'qtWords' );

});

Template.qt.helpers({
   dateInput: function() {
	return moment(this.dateInput).format('MM월/DD일/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM월/DD일/YYYY');
} 
});

Template.qt.events({
 

    "click .removeQt": function () {
      qtWords.remove(this._id);
    }
  });


Template.qt.events({
'click .previous2': function(){
     if(Session.get('limit')>=6){
         Session.set('limit',Session.get('limit')-6);
     }
 },
    
'click .next2': function(){
     Session.set('limit',Session.get('limit')+6);
     
 }
  });