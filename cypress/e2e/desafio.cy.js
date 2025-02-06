///<reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio_valid_data.json')

// const screens = ['desktop', 'iphone-x', 'iphone-xr']

screens.forEach(element => {

    // describe('Cadastro de usuário', () => {

        const user_name = 'Michael Felipe'
        const user_email = 'michaelfelipe@gmail.com'
        const user_password = '123456'


        beforeEach('Acessando página de cadastro', () => {

            // if(element != 'desktop') {
            //     cy.viewport(element)
            // }


            home_page.accessRegisterPage()
        })
        it('validar campo nome vazio', () => {
            register_page.saveRegisterPage()
            register_page.checkMessage('O campo nome deve ser prenchido')
        })

        it('validar compo e-mail vazio', () => {
            register_page.fillName(user_name)
            register_page.saveRegisterPage()
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
        })

        it('validar compo e-mail inválido', () => {
            register_page.fillName(user_data.name)
            register_page.fillEmail('michaelfelipe@')
            register_page.saveRegisterPage()
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')

        })

        it('validar compo senha vazio', () => {
            register_page.fillName(user_name)
            register_page.fillEmail(user_email)
            register_page.saveRegisterPage()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })

        it('validar compo senha inválido', () => {
            register_page.fillName(user_name)
            register_page.fillEmail(user_email)
            register_page.fillPassword('12345')
            register_page.saveRegisterPage()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })

        it('Cadastro realizado com sucesso', () => {
            const name = faker.name.fullName()
            register_page.fillName(name)
            register_page.fillEmail(user_data.email)
            register_page.fillPassword(user_data.password)
            register_page.saveRegisterPage()
            register_page.checkRegisterSucess(name)
            register_page.confirmOk()


        })



    })

// });



