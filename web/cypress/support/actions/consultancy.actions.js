Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('input[placeholder="Digite seu nome completo"]').type(form.name)
    cy.get('#email').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]').type(form.phone)
    //.should('have.value', '(11) 99999-1000')

    //XPATH -> //label[text()="Tipo de Consultoria"]/..//select
    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType)

    if (form.personTypePF === 'cnpj') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
    }

    if (form.personTypePF === 'cpf') {
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        //.should('have.value', '411.007.480-08')
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
    }

    /* cy.get('input[placeholder="00.000.000/0000-00"]')
        .type('96687513000191')
        .should('have.value', '96.687.513/0001-91') */

    form.allChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    cy.get('input[type="file"]')
        .parent()
        .find('span')
        .should('have.text', 'docteste.pdf')

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)
        .should('have.value', form.description)

    form.technologies.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech + '{enter}')

        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })
    if (form.termsAccepted) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
            .should('be.checked')
    }
})

Cypress.Commands.add('submitForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateModal', () => {
    cy.get('.modal', { timeout: 8000 })
        .should('be.visible')
        .within(() => {
            cy.contains('h3', 'Sucesso!')
                .should('be.visible')
            cy.contains('p', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
                .should('be.visible')
        })
})