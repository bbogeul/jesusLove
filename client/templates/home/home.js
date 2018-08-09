Template.home.rendered = function() {
    new WOW().init({ mobile:    false}); 
}

Template.home.helpers ({
    newestSharon: function() {
    return SharonNews.find({},{ sort: { dateInput: -1 }, limit: 1}).fetch();;
    
  },
   newestQt: function() {
    return qtWords.find({},{ sort: { dateInput: -1 }, limit: 1}).fetch();;
    
  },
  newestPrayer: function() {
      return PrayerList.find({allowed:true},{sort: {createdAt: -1},limit: 1}).fetch();;
  },
       dateInput: function() {
	return moment(this.dateInput).format('MM/DD/YYYY');
},
       createdAt: function() {
	return moment(this.createdAt).format('MM/DD/YYYY');
}
});

