Template.sharonPage.rendered = function () {
    new WOW().init({ mobile:    false}); 
    var box = $('#sharonHead');

$('#sharonHeadButton').on('click', function () {

  box.toggleClass('hidden');
    $("#mastHeadContents").toggleClass('hide');
});
  
}