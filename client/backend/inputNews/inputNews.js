AutoForm.addHooks(['insertNewsForm'], {
    onSuccess: function(operation, result, template) {
      Bert.alert( '성공! 소식을 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
   
    }
  });
    AutoForm.addHooks(['updateNewsForm'], {
    onSuccess: function(operation, result, template) {
      Bert.alert( '성공! 소식을 수정하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
   
    }
  });