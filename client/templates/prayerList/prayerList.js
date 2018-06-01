Template.prayerList.helpers ({
 
  PrayerList: function() {
    return PrayerList.find({},{ sort: { createdAt: -1 } });
    
  },
     dateInput: function() {
  return moment(this.dateInput).format('MM/DD/YYYY');
},
       createdAt: function() {
  return moment(this.createdAt).format('MM/DD/YYYY');
}
});
