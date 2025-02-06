///<reference types="cypress" />


// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password',

    },
    message: {
        error: '#errorMessageFirstName',
        successTitle: '.swal2-title',
        successSubtitle: '#swal2-html-container'

    }
}

export default {

    // Ações/métodos/funções
    saveRegisterPage() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },

    fillEmail(user_email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(user_email)

    },

    fillName(user_name) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(user_name)

    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    checkMessage(message) {
        cy.get(elements.message.error)
            .then((element) => {
                expect(element.text()).eql(message)
            })
    },

    checkRegisterSucess(name) {
        cy.get(elements.message.successTitle)
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eql('Cadastro realizado!')
            })
        cy.get(elements.message.successSubtitle, { timeout: 3000 }) //timeout de ex podendo configuurar no cypress.config.js
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eql(`Bem-vindo ${name}`)
            })
    },

    confirmOk() {
        cy.get('.swal2-confirm')
            .should('be.visible')
            .click()
    }





}
