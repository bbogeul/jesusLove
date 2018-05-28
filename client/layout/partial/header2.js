Template.header2.rendered = function() { 
  new WOW().init({mobile: false});
 var offset = 100;
  var navigationContainer = $('#cd-nav'),
    mainNavigation = navigationContainer.find('#cd-main-nav ul');  
  checkMenu();
  $(window).scroll(function() {
    checkMenu();
  }); 
  $('.cd-nav-trigger').on('click', function() {
    $(this).toggleClass('menu-is-open');
     
    mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

  });

  function checkMenu() {
    if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
      navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        mainNavigation.addClass('has-transitions');
      });
    } else if ($(window).scrollTop() <= offset) {
     
      if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
         
        mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
           
          mainNavigation.removeClass('is-visible is-hidden has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
        });
     
      } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
        mainNavigation.removeClass('is-visible has-transitions');
        navigationContainer.removeClass('is-fixed');
        $('.cd-nav-trigger').removeClass('menu-is-open');
        
      } else {
        navigationContainer.removeClass('is-fixed');
        mainNavigation.removeClass('has-transitions');
      }
    }
  }
};
Template.header2.onRendered(function(){
$('.modal-trigger').leanModal();
 
});