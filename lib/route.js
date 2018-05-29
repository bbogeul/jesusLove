Router.route('/', {
  name: 'home',
    title: '주사랑교회 - 그리스도를 위한 제자들',
    layoutTemplate: 'appLayout2'
});
Router.route('/welcome', {
  name: 'welcome',
    title: '환영합니다! | 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/redirect/Comingsoon', {
  name: 'preschool',
    title: 'Coming Soon | 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/new-family', {
  name: 'newFamily',
    title: '새가족등록 | 주사랑교회',
    layoutTemplate: 'appLayout2'
    
});
Router.route('/youth-service', {
  name: 'youthIntro',
    title: '교육부 | 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/introduction-jesus-love', {
  name: 'intro',
    title: '소개합니다 | 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/church-news', {
  name: 'churchNews',
    title: '교회소식 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/add-news', {
  name: 'addNews',
    title: '교회소식 추가 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/sharon-praise-team', {
  name: 'sharon',
    title: '샤론 찬양대 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/sharon-praise-team/news', {
  name: 'sharonNewsList',
    title: '샤론 찬양대 소식- 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/missionary', {
  name: 'missionary',
    title: '선교 및 사역 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/youth-ministry', {
  name: 'youth',
    title: '교육부 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/qt', {
  name: 'qt',
    title: 'QT 말씀 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/sermon-sunday', {
  name: 'sermon1',
    title: '주일예배 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/sharon-Test', {
  name: 'sharonTest',
    title: 'test',
    layoutTemplate: 'appLayout2'
});
Router.route('/login', {
  name: 'loginPage',
    title: '로그인 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});
Router.route('/contact-jesuslove', {
  name: 'contactEmail',
    title: '연락하기 - 주사랑교회',
    layoutTemplate: 'appLayout2'
});

//백엔드
Router.route('/dashboard', {
  name: 'dashboard',
    title: '환영합니다! - 주사랑교회',
    layoutTemplate: 'dashboardLayout'
});
Router.route('/dashboard/editSite/intro', {
  name: 'editIntro',
    title: '페이지 수정 및 추가하기 - 주사랑교회',
    layoutTemplate: 'dashboardLayout'
});
Router.route('/dashboard/editSite/welcome', {
  name: 'editWelcome',
    title: '페이지 수정 및 추가하기 - 주사랑교회',
    layoutTemplate: 'dashboardLayout',
      waitOn: function(){
    return Meteor.subscribe('theAList');
  },
     fastRender: true
});
Router.route('/dashboard/editSite/add-jubo-list', {
  name: 'addJuboList',
    title: '주보 수정하기 - 주사랑교회',
    layoutTemplate: 'dashboardLayout',
      waitOn: function(){
    return Meteor.subscribe('theJuboList');
  },
     fastRender: true
});
Router.route('/sharon-praise-team-add', {
  name: 'sharonAdd',
      layoutTemplate: 'appLayout2',
    title: '악보 추가하세요 - 주사랑교회'
});
Router.route('/sharon-news-add', {
  name: 'sharonListing',
    layoutTemplate: 'appLayout2',
    title: '소식 추가하세요 - 주사랑교회'
});

//view

Router.route('/sharon-chart', 'sharon');
Router.route('/sharon-chart/:_id', function () {
      this.layout('appLayout2');
  var item = SharonNews.findOne({_id: this.params._id});
  this.render('sharonView', {data: item});
}, {
  name: 'sharon.show'
});
Router.route('/qt-view', 'qt');
Router.route('/qt-view/:_id', function () {
      this.layout('appLayout2');
  var item = qtWords.findOne({_id: this.params._id});
    var qtTitle = qtWords.findOne({_id: this.params.verse});
  this.render('qtShow', {data: item});
}, {
  name: 'qt.show',
    title: 'QT | 주사랑교회'
});
Router.route('/sharon-news', 'sharon');
Router.route('/sharon-news/:_id', function () {
      this.layout('appLayout2');
  var item = SharonNews2.findOne({_id: this.params._id});
  this.render('sharonNews', {data: item});
}, {
  name: 'sharonNews.show'
});
//specific

Router.route('/dashboard/editSite/welcome/edit/', 'editWelcome');
Router.route('/dashboard/editSite/welcome/edit/:_id', function () {
      this.layout('dashboardLayout');
  var item = AboutChurch.findOne({_id: this.params._id});
  this.render('editText', {data: item});
}, {
  name: 'editText.show',
      waitOn: function(){
    return Meteor.subscribe('theAList');
  },
    
   fastRender: true
});
Router.route('/qt/edit/', 'qtShow');

Router.route('/qt/edit/:_id', function () {
      this.layout('appLayout2');
  var item = qtWords.findOne({_id: this.params._id});
    
  this.render('editQt', {data: item});
}, {
  name: 'editQt.show',
      waitOn: function(){
    return Meteor.subscribe('theQList');
  },

    
   fastRender: true
});
Router.route('/dashboard/editSite/add-jubo-list/editJubo', 'addJuboList');
Router.route('/dashboard/editSite/add-jubo-list/editJubo/:_id', function () {
      this.layout('dashboardLayout');
  var item = AddJubo.findOne({_id: this.params._id});
  this.render('editJubo', {data: item});
}, {
  name: 'editJubo.show',
      waitOn: function(){
    return Meteor.subscribe('theJuboList');
  },
    
   fastRender: true
});
Router.route('/dashboard/editSite/add-jubo-list/editJubo2', 'addJuboList');
Router.route('/dashboard/editSite/add-jubo-list/editJubo2/:_id', function () {
      this.layout('dashboardLayout');
  var item = AddJubo2.findOne({_id: this.params._id});
  this.render('editJubo2', {data: item});
}, {
  name: 'editJubo2.show',
      waitOn: function(){
    return Meteor.subscribe('theJuboList2');
  },
    
   fastRender: true
});