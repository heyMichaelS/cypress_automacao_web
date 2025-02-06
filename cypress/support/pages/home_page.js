///<reference types="cypress" />

export default {

    accessRegisterPage() {
        //acessou a aplicação
        cy.visit('/')
            .get('.header-logo')
        // entrou no registro
        cy.get('.fa-lock')
            .click()
        //verificar se esta na pagina de cadastro
        cy.get('#user')
            .should('be.visible')
    }

}