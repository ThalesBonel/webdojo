describe('iFrame', () => {
    it('Deve poder iniciar o vídeo de exemplo', () => {
        cy.login()
        cy.goTo('Video', 'Video')

        cy.get('iframe[title="Video Player"]', {timeout: 5000})
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iframeBody')
        
        cy.get('@iframeBody')
            .find('.play-button')
            .click()
        
         cy.get('@iframeBody')
            .find('.pause-button')
            .should('be.visible')
    })
})