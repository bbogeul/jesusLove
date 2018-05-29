Template.contactEmail.events({
    'submit #email-form': function(e,t){
    e.preventDefault();
    var toAddr=t.find('#inputEmail').value;
    var subj=t.find('#inputSubject').value;
    var body=t.find('#inputBody').value;
    Meteor.call('sendEmail',toAddr,subj,body);
 
}
})