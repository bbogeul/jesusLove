  AutoForm.addHooks(['insertSharonForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 악보 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
      Router.go("/admin/backend/sharon-listing");
 
  }
});
  AutoForm.addHooks(['updateSharonForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 악보 수정하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});