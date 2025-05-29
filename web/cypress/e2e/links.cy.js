describe('Ao clicar em links deve abrir uma nova guia', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Valindado a nova guia ao clicar no link do instagram', () => {
        cy.get('[data-cy="instagram-link"]').realHover()
            .should('have.attr', 'target', '_blank')
            .and('have.attr', 'href', 'https://www.instagram.com/qapapito')
    })
    it('Acessa o link de termos de uso removendo o target', () => {
        cy.goTo('Formulários', 'Consultoria')

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
            .should('be.visible')
        cy.url()
            .should('include', '/terms')
    })
})