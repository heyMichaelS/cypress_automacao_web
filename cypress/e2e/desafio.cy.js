///<reference types="cypress" />

describe('Cadastro de usuário', () => {

    const user_name = 'Michael Felipe'
    const user_email = 'michaelfelipe@gmail.com'
    const user_password = '123456'

    it('validar campo nome vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')

        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .then((element) => {
                expect(element.text()).eql('O campo nome deve ser prenchido')
            })



        })

    it('validar compo e-mail vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
            .get('#user')
            .type('michael')
            .should('be.visible')

        cy.get('#email')
            .should('be.visible')


        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eql('O campo e-mail deve ser prenchido corretamente')




            })

    })

    it('validar compo e-mail inválido', () => {
        cy.visit('/')
            .get('.header-logo')


        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

        cy.get('#email')
            .type('michaelfelipe@')

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eql('O campo e-mail deve ser prenchido corretamente')
            })


    })

    it('validar compo senha vazio', () => {
        cy.visit('/')
            .get('.header-logo')


        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

        cy.get('#email')
            .should('be.visible')
            .type(user_email)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eql('O campo senha deve ter pelo menos 6 dígitos')
            })


    })

    it('validar compo senha inválido', () => {
        cy.visit('/')
            .get('.header-logo')


        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')

        cy.get('#user')
            .should('be.visible')
            .type('michael')

        cy.get('#email')
            .should('be.visible')
            .type('michaelfelipe@gmail.com')

        cy.get('#password')
            .should('be.visible')
            .type('12345')

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eql('O campo senha deve ter pelo menos 6 dígitos')
            })


    })

    it('Cadastro realizado com sucesso', () => {
        cy.visit('/')
            .get('.header-logo')


        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

        cy.get('#email')
            .should('be.visible')
            .type(user_email)

        cy.get('#password')
            .should('be.visible')
            .type(user_password)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('.swal2-title')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eql('Cadastro realizado!')
            })

        cy.get('#swal2-html-container')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).eql(`Bem-vindo ${user_name}`)
            })

        cy.get('.swal2-confirm')
            .should('be.visible')
            .click()

    })



})




