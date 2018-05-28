if (Meteor.isClient) {
 Meteor.subscribe('theAList');
 Meteor.subscribe('thePList');    
    Meteor.subscribe('theAList');
 Session.setDefault("limit",6);
    Deps.autorun (function ()  {
         Meteor.subscribe('theQList',Session.get("limit"))
             } );
    Meteor.subscribe('theJuboList');
 Meteor.subscribe('theJuboList2');   
         Meteor.subscribe('theServiceDate');
    Meteor.subscribe('theWordOfTheWeek');
Meteor.subscribe('theServiceMembersList');  
 Session.setDefault("skip",5);
    Deps.autorun (function ()  {
         Meteor.subscribe('theSList',Session.get("skip"))
             } );

    

}