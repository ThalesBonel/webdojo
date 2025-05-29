describe('Validação de Perfils do Github', () => {

    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve cadastrar um novo perfil do github', () => {
        cy.get('#name').type('Thales Testes')
        cy.get('#username').type('ThalesBonel')
        cy.get('#profile').type('QA')
        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Thales Testes')
        cy.get('#username').type('novothales')
        cy.get('#profile').type('QA')
        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'novothales')
            .should('be.visible')
            .as('trProfile')
        cy.get('@trProfile')
            .contains('td', 'Thales Testes')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')
    })

    it('Deve remover um perfil existente da tabela github', () => {

        const fillGithubForm = {
            name: 'Thales Testes',
            username: 'thalestestes',
            profile: 'QA'
        }

         cy.get('#name').type(fillGithubForm.name)
        cy.get('#username').type(fillGithubForm.username)
        cy.get('#profile').type(fillGithubForm.profile)
        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', fillGithubForm.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('button[title="Remover perfil"]').click()
            .should('not.exist')
    })

    it('Deve validar link de redirect com nova aba', () => {
        const fillGithubForm = {
            name: 'Thales Testes',
            username: 'ThalesBonel',
            profile: 'QA'
        }

        cy.get('#name').type(fillGithubForm.name)
        cy.get('#username').type(fillGithubForm.username)
        cy.get('#profile').type(fillGithubForm.profile)
        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', fillGithubForm.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('a')
            .should('be.visible')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'href', 'https://github.com/ThalesBonel')
            .invoke('removeAttr', 'target')
            .click()
    })
})