Template.prayerListing.onCreated(function () {
    this.pagination = new Meteor.Pagination(PrayerList, {sort: {createdAt: -1}});
});

Template.prayerListing.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    prayers: function () {
        return Template.instance().pagination.getPage();
    },
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});

Template.prayerList.rendered = function () {
    new WOW().init({ mobile:    false}); 
    
}

Template.prayerListing.helpers ({
    dateInput: function() {
        return moment(this.dateInput).format('MM/DD/YYYY');
    },
           createdAt: function() {
        return moment(this.createdAt).format('MM/DD/YYYY');
    }
});