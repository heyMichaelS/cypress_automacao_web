/// <reference types="cypress" />

describe('Asserts', () => {

    it('Verificar se está visivel', () => {

        cy.visit('/')
            .get('.header-logo')


        cy.get('.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).eql('Login')
                expect(element).to.be.visible

            })

    })




})