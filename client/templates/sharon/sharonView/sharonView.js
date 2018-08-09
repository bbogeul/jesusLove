Template.sharonView.rendered = function () {
    new WOW().init({ mobile:    false}); 
}

Template.sharonView.helpers ({
    dateInput: function() {
        return moment(this.dateInput).format('MM/DD/YYYY');
    },
           createdAt: function() {
        return moment(this.createdAt).format('MM/DD/YYYY');
    }
});