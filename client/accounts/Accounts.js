 
AccountsTemplates.configure({
    // Behavior
    
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,
        // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: false,
    showResendVerificationEmailLink: false,
    
     
 

    // Texts
    texts: {
      button: {
          signUp: "회원가입",
          signIn: "지금 로그인하세요"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: '이름',
		required: true

	},
	{
		_id: 'lastName',
		type: 'text',
		displayName: '성',
		required: true

	},
	{
		_id: 'phoneNumber',
		type: 'text',
		displayName: '전회번호',
		required: true

	} 
]);