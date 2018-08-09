Template.sharonListing.onCreated(function () {
    this.pagination = new Meteor.Pagination(SharonNews, {
        sort: {
            dateInput: -1
        }
    });
});

Template.sharonListing.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    document: function () {
        return Template.instance().pagination.getPage();
    },
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});



Template.sharonListing.helpers ({

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