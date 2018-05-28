Template.welcome.onRendered(function(){
 $('.parallax').parallax();
 
});
Template.welcome.helpers ({
  AboutList: function() {
    return AboutChurch.find({},{ sort: { createdAt: -1 }, limit: 1 }).fetch();;
    
  }
});
Template.welcome.onCreated(function(){
  this.AboutList = this.subscribe( 'AboutList' );
});


 