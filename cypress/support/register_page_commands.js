///<reference types="cypress" />


// Elementos
const elements = {
    buttons:{
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password',
        
    },
    message:{
        error: '#errorMessageFirstName',
        successTitle: '.swal2-title',
        successSubtitle: '#swal2-html-container'

    }
}

// Ações/métodos/funções
Cypress.Commands.add('saveRegisterPage', () => {
    cy.get(elements.buttons.register)
        .should('be.visible')
        .click()


})

Cypress.Commands.add('fillEmail', (user_email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(user_email)

})

Cypress.Commands.add('fillName', (user_name) => {
    cy.get(elements.fields.name)
        .should('be.visible')
        .type(user_name)

})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.message.error)
        .then((element) => {
            expect(element.text()).eql(message)
        })
})



Cypress.Commands.add('checkRegisterSucess', (name) => {
    cy.get(elements.message.successTitle)
        .should('be.visible')
        .then((element) => {
            expect(element.text()).eql('Cadastro realizado!')
        })
        cy.get(elements.message.successSubtitle, {timeout: 3000}) //timeout de ex podendo configuurar no cypress.config.js
        .should('be.visible')
        .then((element) => {
            expect(element.text()).eql(`Bem-vindo ${name}`)
        })
})


Cypress.Commands.add('confirmOk', () => {
    cy.get('.swal2-confirm')
        .should('be.visible')
        .click()
})




