Meteor.methods({
 toggleAdmin(id) {
       if (Roles.userIsInRole(id, 'normal')) {
      Roles.removeUsersFromRoles(id, 'normal');
     } else {
      Roles.addUsersToRoles(id, 'normal');
     }
 }
});
Meteor.methods({

 removeAdmin(id) {
  Meteor.users.remove(id);
 }
});