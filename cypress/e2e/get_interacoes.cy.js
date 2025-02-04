/// <reference types="cypress" />

describe('Interações', () => {
    // get () - selecionar elementos
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('michaelfelipe@teste.com')


    })

    it('Click', () => {
        cy.visit('/')
            .get('.header-logo')

        // cli normal 
        // cy.get('.fa-user')
        //     .click()


        // clique duplo
        // cy.get('.fa-user')
        //     .dblclick()

        // cy.get('.fa-user')
        //    .rightclick()

        // click por cordenadas
        // cy.get('.fa-user')
        //     .click(100,100, {force: true})

        // simular apaertar enter

        cy.get('.form-control')
            .type('michaelfelipe@teste.com{enter}')

        cy.get('.swal2-confirm')
            .click()
    })

    it('Select', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Ghana')


    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#javascript')
            .check()
       


    })



})