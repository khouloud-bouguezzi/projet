
/// <reference types="cypress" />

/*describe('login functionality', () =>{
    it('user can login', () =>{
       cy.visit('https://release2.siteflow.app/')
       cy.get('[data-cy=email-field] input').clear().type('khouloud.bouguezzi@siteflow.com');
       cy.get('[data-cy=password-field]').clear().type('azerty2020');
       cy.get('[data-cy=login-button]').click();
    })
})*/

    describe('bibliotheques ', () =>{

        before(()=>{
            cy.visit('https://release2.siteflow.app/')
            cy.get('[data-cy=email-field] input').clear().type('khouloud.bouguezzi@siteflow.com');
            cy.get('[data-cy=password-field]').clear().type('azerty2020');
            cy.get('[data-cy=login-button]').click();
            cy.wait(1000)
            cy.get('[data-cy=projects-list]').should('be.visible')
          })
        it('user can add a risk', () =>{
            
        cy.get('[data-cy=navbar-library]').click();
        cy.wait(1000)
        cy.get('[data-cy=navbar-create]').click();
        cy.get('[data-cy=risk-family-tab]').click();
        cy.get('[data-cy="parent_item_0_child_item_0"]').click();
        cy.get('[data-cy="risk-name-tab"]').type('risk test');
        cy.get('[data-cy="risk-source-tab"]').type('source');
        cy.get('[data-cy="risk-applicability-tab"]').click();
        cy.get('[data-cy="parent_item_0"] > .title-container > .node-label > .sfx-label-container > .nb-line-1').click();
        cy.get('[data-cy="validate-button"]').click();
        cy.get('[data-cy="save-button"]').click();
         })

        it.only('user can add a form', () =>{
            cy.get('[data-cy=navbar-library]').click();
            cy.wait(2000)
            cy.get('[data-cy="navigation-menu-item-18"]').should('be.visible').click();
            cy.wait(1000)
            cy.get('[data-cy=navbar-create]').click();
            cy.get('[data-cy="type-tab"]').click();
            cy.get('[data-cy="parent_item_0"]').click();
            cy.get('[data-cy="family-tab"] > .select-filter-container > [data-cy="select-items"] > .sfx-button').click();
            cy.get('[data-cy="parent_item_0_child_item_0"]').click();
            cy.get(':nth-child(3) > .sfx-field-control > .select-filter-container > [data-cy="select-items"] > .sfx-button').click();
            cy.get('[data-cy="parent_item_0"]').click();
            cy.get('[data-cy="name-tab"]').type('formTest');
            cy.get('[data-cy="validate-button"] > .sfx-button > .button-content').click();
            cy.wait(1000)
            cy.get('[data-cy="validate-button"] > .sfx-button > .button-content').click();
    })
})

       


  