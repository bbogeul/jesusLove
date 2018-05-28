Template.sermon1.rendered = function() {
     new WOW().init({ mobile:    false}); 
     $('.parallax').parallax();
    
        
}
Template.sermon1.helpers ({
  JuboList: function() {
    return AddJubo.find({},{ sort: { createdAt: 1 } }).fetch();;
    
  },
  JuboList2: function() {
    return AddJubo2.find({},{ sort: { createdAt: 1 } }).fetch();;
    
  },    
  ServiceMembers: function() {
      return ServiceMembers.find({},{ sort: { createdAt: -1 }, limit:1 }).fetch();;
  },
    DateForService: function() {
      return DateForService.find({},{ sort: { createdAt: 1 }, limit:1 }).fetch();;
  }
});

Template.sermon1.onCreated(function(){
  this.JuboList = this.subscribe( 'AddJubo' );
    this.JuboList2 = this.subscribe( 'AddJubo2' );
 this.ServiceMembers = this.subscribe( 'ServiceMembers' );
     this.DateforService = this.subscribe( 'DateForService' );
});

 