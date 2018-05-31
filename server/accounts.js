 var postSignUp = function(userId, info) {
 
  Roles.addUsersToRoles(userId, ['waiting', info.profile.profession]);
}
 

AccountsTemplates.configure({
    // Behavior
    postSignUpHook: postSignUp
 
});
 