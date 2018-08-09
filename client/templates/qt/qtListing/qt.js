Template.qtListing.onCreated(function () {
    this.pagination = new Meteor.Pagination(qtWords, {
        sort: {
            createdAt: -1
        }
    });
});
Template.qtListing.helpers ({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function () {
        return Template.instance().pagination.getPage();
    },
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    } 
});
Template.qtListing.helpers ({
 
 
     dateInput: function() {
	return moment(this.dateInput).format('MM/DD/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM/DD/YYYY');
}
});
Template.qtListing.rendered = function () {
    new WOW().init({ mobile:    false}); 
    
}