///<reference types="cypress" />

describe('Get Elements', () => {
    // get () - selecionar elementos
    it('Encontrar elementos', () => {
        cy.visit('/')
            .get('.header-logo')
        // contains() - para encontarar elementos por texto
        // geralmente diminuimos o escopo com get ()
        cy.get('#top_header').as('cabecalho')
            .contains('Login')
        // find() - para encontrar elementos 
        // geralmente diminuimos o escopo com um get()
        cy.get('@cabecalho')
            .find('.fa-user')
        // as () - alias
        // serve para criar apelidos (atalhos) para 
        // grandes comandos 
        cy.get('@cabecalho')
            .find('.fa-user')

    })


})