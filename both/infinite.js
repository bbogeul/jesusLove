 if (Meteor.isClient) {
  var handle;
Deps.autorun(function() {

  handle=Meteor.subscribeWithPagination('thePLList',10);
});
Template.prayerList.events({
'click .loadMorePrayer': function(){
  handle.loadNextPage();
}
})
}

