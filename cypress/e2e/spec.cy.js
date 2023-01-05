/// <reference types="cypress" />

it ('google test', function(){
cy.visit('https://release2.siteflow.app/')
//cy.get('.XDyW0e').click();
//cy.get('.gLFyf').click().type('france{enter}');
})
describe('login functionality', () =>{
 it.only( 'user can login', () =>{
    cy.visit('https://release2.siteflow.app/')
      //cy.log('i am inside the before hook')
      cy.get('[data-cy=email-field] input').clear().type('khouloud.bouguezzi@siteflow.com');
      cy.get('[data-cy=password-field]').clear().type('azerty2020');
      cy.get('[data-cy=login-button]').click();
 })
    })