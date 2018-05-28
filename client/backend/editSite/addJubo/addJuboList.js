Template.addJuboList.helpers ({
  AddJubo: function() {
    return AddJubo.find({},{ sort: { createdAt: 1 } }).fetch();;
    
  },
  AddJubo2: function() {
    return AddJubo2.find({},{ sort: { createdAt: 1 } }).fetch();;
    
  },    
  ServiceMembers: function() {
      return ServiceMembers.find({},{ sort: { createdAt: -1 }, limit:1 }).fetch();;
  }
});
Template.addJuboList.onCreated(function(){
  this.AddJubo = this.subscribe( 'AddJubo' );
this.ServiceMembers = this.subscribe( 'ServiceMembers' );
});



Template.addJuboList.events({
    "click .removeJubo": function () {
      AddJubo.remove(this._id);
    },
    "click .removeJubo2": function () {
      AddJubo2.remove(this._id);
    }
  });

Template.addJuboList.rendered = function () {
     $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();     
  });
}


Template.dateLine.helpers ({
    DateForService: function() {
      return DateForService.find({},{ sort: { createdAt: -1 }, limit: 1}).fetch();;
  }, 
     dateDate: function() {
	return moment(this.dateDate).format('MM월/DD일/YYYY');
}
});
