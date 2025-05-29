describe('Simulando MouseOver', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link', () => {
        cy.login()
        cy.contains('Isso é Mouseover!')
            .should('not.exist')

        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!')
            .should('exist')

    })
})