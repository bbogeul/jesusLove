 AutoForm.addHooks(['insertQtForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 큐티 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});
  AutoForm.addHooks(['updateQtForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 큐티 수정하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});