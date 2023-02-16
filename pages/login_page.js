const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    email: '~email',
    password: '~senha'

  },

  buttons:{
    enter: '~entrar'
  },

  messagens:{
    loginError: '~lognFail'
  },

  doLogin(email, password){
    I.fillField(this.fields.email ,email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)

  },
  
  checkLoginError() {
    I.waitForElement(this.messagens.loginError, 5)
    I.seeElement(this.messagens.loginError)

  }

}

