  AutoForm.addHooks(['insertPrayerForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 기도제목 제출하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
      
 
  }
});
  AutoForm.addHooks(['updatePrayerForm'], {
  onSuccess: function(operation, result, template) {
    Bert.alert( '성공! 기도제목 수정하셨습니다.', 'success', 'growl-top-right', 'fa-check' );
 
  }
});