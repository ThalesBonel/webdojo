import { getTodayFormattedDate } from '../support/utils'
describe('Login', ()=> {

  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com','katana123')
    cy.url().should('include', '/dashboard')
    
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.getCookie('login_date').should('exist')
    cy.getCookie('login_date').should((cookie)=> {
      expect(cookie.value).to.eq(getTodayFormattedDate())
    })

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
      expect(token).to.match(/^[a-fA-F0-9]{32}$/)
    })
  })

  it('Mensagem de Erro deve aparecer ao tentar logar com senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com','katana231')
    

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

   it('Mensagem de Erro deve aparecer ao tentar logar com Email inválido', () => {
    cy.start()
    cy.submitLoginForm('papto@webdojo.com','katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
}) 