Template.prayerListingBack.onCreated(function () {
    this.pagination = new Meteor.Pagination(PrayerList, {sort: {createdAt: -1}});
});

Template.prayerListingBack.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    prayersBack: function () {
        return Template.instance().pagination.getPage();
    },
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});

Template.prayerListingBack.rendered = function () {
    new WOW().init({ mobile:    false}); 
    
}

Template.prayerListingBack.helpers ({
    dateInput: function() {
        return moment(this.dateInput).format('MM/DD/YYYY');
    },
           createdAt: function() {
        return moment(this.createdAt).format('MM/DD/YYYY');
    }
});

Template.prayerListingBack.events ({
    'click .deletePrayer': function () {
        PrayerList.remove(this._id);
    }
});