import {LoginPage} from "../pages/login_page";
const loginPage = new LoginPage()

describe('first part of common cases', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    afterEach(() => {
        cy.clearCookies();
      });

    it('login to the website with valid credentials', () => {
        loginPage.enterUsername('Admin');
        cy.get(loginPage.username_inputField).should('have.value', 'Admin')
        loginPage.enterPassword('admin123');
        cy.get(loginPage.password_inputField).should('have.value', 'admin123')
        cy.get(loginPage.submitButton).should('be.enabled')
        loginPage.clickLogin();
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    });

    it('login to the website with invalid credentials', () => {
        loginPage.enterUsername('Invalid');
        cy.get(loginPage.username_inputField).should('have.value', 'Invalid')
        loginPage.enterPassword('admin123');
        cy.get(loginPage.password_inputField).should('have.value', 'admin123')
        loginPage.clickLogin();
        cy.get(loginPage.invalidCredentialsAlert).should('have.text', 'Invalid credentials')
    });

});

  
describe('second part of common casses with user logged', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
    })

    afterEach(() => {
        cy.clearCookies();
      });

    it('check user info', () => {
        
    });
});

Cypress.Commands.add('login', (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
  });