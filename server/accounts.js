 var postSignUp = function(userId, info) {
 
  Roles.addUsersToRoles(userId, ['normal', info.profile.profession]);
}
 

AccountsTemplates.configure({
    // Behavior
    postSignUpHook: postSignUp
 
});
 