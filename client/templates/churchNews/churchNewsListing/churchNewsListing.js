Template.churchNewsListing.onCreated(function () {
    this.pagination = new Meteor.Pagination(ChurchNews, {sort: {createdAt: -1}});
});

Template.churchNewsListing.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    churchNews: function () {
        return Template.instance().pagination.getPage();
    },
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});

Template.churchNewsListing.rendered = function () {
    new WOW().init({ mobile:    false}); 
    
}

Template.churchNewsListing.helpers ({
    dateInput: function() {
        return moment(this.dateInput).format('MM/DD/YYYY');
    },
           createdAt: function() {
        return moment(this.createdAt).format('MM/DD/YYYY');
    }
});