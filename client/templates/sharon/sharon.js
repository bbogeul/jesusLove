 
Template.sharon.rendered = function() {
     new WOW().init({ mobile:    false}); 
     $('.parallax').parallax();       
}
 
Template.sharonMusic.helpers ({
  SharonNews: function() {
    return SharonNews.find({},{ sort: { createdAt: -1 } }).fetch();;
    
  },
SharonNewsCount: function() {
    return SharonNews.find({}).count()
},
 
     dateInput: function() {
	return moment(this.dateInput).format('MM/DD/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM/DD/YYYY');
}
});
Template.sharonListNews.helpers ({
 
  SharonNews2: function() {
    return SharonNews2.find({},{ sort: { createdAt: -1 } }).fetch();;
    
  },
     dateInput: function() {
	return moment(this.dateInput).format('MM/DD/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM/DD/YYYY');
}
});

Template.sharonMusic.onCreated(function(){
  this.SharonNews = this.subscribe( 'SharonNews' );
   
});

Template.sharonListNews.onCreated(function(){

    this.SharonNews2 = this.subscribe( 'SharonNews2' );
});
  
 
  Template.sharonMusic.events({
 'click .previous': function(){
     if(Session.get('skip')>=10){
         Session.set('skip',Session.get('skip')-10);
     }
 },
'click .next': function(){
     Session.set('skip',Session.get('skip')+10);
     
 },      

    "click .removeChart": function () {
      SharonNews.remove(this._id);
    }
  });

