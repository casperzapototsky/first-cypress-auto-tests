export class LoginPage {

     username_inputField = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
     password_inputField = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
     submitButton = '.oxd-button'
     invalidCredentialsAlert = '.oxd-alert-content > .oxd-text'

     enterUsername(username){
      cy.get(this.username_inputField).type(username)
     }
     
     enterPassword(password){
      cy.get(this.password_inputField).type(password)
     }

     clickLogin(){
      cy.get(this.submitButton).click()
     }

  }
  