Router.route('/', {
    name: 'home',
      layoutTemplate: 'appLayout',
      title: '주사랑교회 - 그리스도를 위한 제자들'
  });
Router.route('/about-jesus-love', {
    name: 'about',
      title: '환영합니다! | 주사랑교회',
      layoutTemplate: 'appLayout'
  });
Router.route('/login', {
    name: 'loginPage',
      title: '로그인 - 주사랑교회',
      layoutTemplate: 'loginTemplate'
  });
Router.route('/sharon-choir', {
    name: 'sharonPage',
      title: '샤론찬양대 - 주사랑교회',
      layoutTemplate: 'appLayout'
  });
Router.route('/qt', {
    name: 'qt',
      title: 'QT - 주사랑교회',
      layoutTemplate: 'appLayout'
  });
Router.route('/prayer-list', {
    name: 'prayerList',
      title: '기도제목 - 주사랑교회',
      layoutTemplate: 'appLayout'
  });
Router.route('/add-a-prayer-request', {
    name: 'prayerInput',
      title: '기도제목 입력 - 주사랑교회',
      layoutTemplate: 'appLayout'
  });
Router.route('/church-news', {
    name: 'churchNews',
      title: '교회소식 - 주사랑교회',
      layoutTemplate: 'appLayout'
  });  

//backend routes//
Router.route('/admin/backend', {
    name: 'backendIntro',
      title: 'Admin - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
Router.route('/admin/backend/sharon-input', {
    name: 'sharonInput',
      title: 'Sharon Choir - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
Router.route('/admin/backend/sharon-listing', {
    name: 'sharonListingBack',
      title: 'Sharon Choir - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
Router.route('/admin/backend/qt-input', {
    name: 'inputQt',
      title: 'QT 입력 - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
  Router.route('/admin/backend/news-input', {
    name: 'inputNews',
      title: '소식 입력 - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
Router.route('/admin/backend/prayer-requests', {
    name: 'prayerListingBack',
      title: '기도제목 수락하기 - 주사랑교회',
      layoutTemplate: 'dashboardLayout'
  });
//views
Router.route('/sharon-view', 'sharon');
Router.route('/sharon-view/:_id', function () {
      this.layout('appLayout');
  var item = SharonNews.findOne({_id: this.params._id});
  this.render('sharonView', {data: item});
}, {
  name: 'sharon.show'
});
Router.route('/qt-view', 'qtListing');
Router.route('/qt-view/:_id', function () {
  
      this.layout('appLayout');
  var item = qtWords.findOne({_id: this.params._id});
  this.render('qtView', {data: item});
}, {
  name: 'qtView.show',
title: "QT 보기"}
);
Router.route('/prayer-view', 'prayerListing');
Router.route('/prayer-view/:_id', function () {
      this.layout('appLayout');
  var item = PrayerList.findOne({_id: this.params._id});
  this.render('prayerView', {data: item});
}, {
  name: 'prayer.show'
});



//edit 
Router.route('/sharon-view/edit/', 'sharon');

Router.route('/sharon-view/edit/:_id', function () {

      this.layout('appLayout2');
  var item = SharonNews.findOne({_id: this.params._id});
    
  this.render('sharonEdit', {data: item});
}, {
  name: 'sharonView.show',

      waitOn: function(){
    return Meteor.subscribe('theSList');
  },
title: "샤론 찬양대 악보",
    layoutTemplate: "dashboardLayout",
    
   fastRender: true
});
Router.route('/prayer-view/edit/', 'prayerListing');

Router.route('/prayer-view/edit/:_id', function () {

      this.layout('dashboardLayout');
  var item = PrayerList.findOne({_id: this.params._id});
    
  this.render('updatePrayer', {data: item});
}, {
  name: 'updatePrayer.show',

      waitOn: function(){
    return Meteor.subscribe('thePList');
  },
title: "샤론 찬양대 악보",
    layoutTemplate: "dashboardLayout",
    
   fastRender: true
});