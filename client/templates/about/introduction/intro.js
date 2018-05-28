Template.intro.onRendered(function(){
 $('.parallax').parallax();
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
});

Template.intro.helpers ({
  AboutList: function() {
    return AboutChurch.find({},{ sort: { createdAt: -1 }, limit: 1 }).fetch();;
    
  }
});
Template.intro.onCreated(function(){
  this.AboutList = this.subscribe( 'AboutList' );
});


 