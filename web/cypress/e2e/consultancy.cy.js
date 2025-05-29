import { personal, company } from '../fixtures/consultancyData.json'

describe('Formulário de Consultaria', () => {

    /*     before(() => {
            cy.log('Isso acontece antes de todos os testes uma única vez')
        }) */

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve solicitar dados pra Consultoria Individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitForm()
        cy.validateModal()
    })

    it('Deve solicitar dados pra Consultoria In Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitForm()
        cy.validateModal()
    })

    it('Enviar Formulário sem preencher campos obrigátorios', () => {
        cy.submitForm()

        const requiredFields = [
            { label: 'Nome Completo', errorMessage: 'Campo obrigatório' },
            { label: 'Email', errorMessage: 'Campo obrigatório' },
            { label: 'termos de uso', errorMessage: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({ label, errorMessage }) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', errorMessage)
                .should('be.visible')
                .should('have.css', 'color', 'rgb(248, 113, 113)')
        })

    })

    /*     afterEach(() => {
            cy.log('Testes de Consultoria finalizados')
        })
    
        after(() => {
            cy.log('Isso acontece antes de todos os testes uma única vez')
        }) */
})

