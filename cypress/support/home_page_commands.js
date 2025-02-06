
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {
    //acessou a aplicação
    cy.visit('/')
        .get('.header-logo')

    // entrou no registro
    cy.get('.fa-lock')
        .click()

    //verificar se esta na pagina de cadastro
    cy.get('#user')
        .should('be.visible')


})