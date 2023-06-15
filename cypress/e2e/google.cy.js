describe('google testing block', () => {
    it('google searching works successfully', () => {

        cy.visit('https://www.google.com/');

        cy.get('#L2AGLb > .QS5gu').click();

        cy.get('#APjFqb').type('Rozetka')
          .should('have.class','gLFyf')
          .should('have.value','Rozetka');

        cy.contains('Google Suche').click();
        
    });
});


// # in the start of the element is element's id but if it is dot so it is class
// we can set timeout into the code e.g. cy.get('#APjFqb'.{timeout: 5000}).type('Rozetka'); - command level
// another way is to change it globaly in cypress config (change the default timeout value) - global level
// use wait command e.g. cy.wait(2000) if you want some pause between actions