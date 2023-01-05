/// <reference types="cypress" />

it('find element by tag name', ()=>{
    cy.visit('/');
    cy.get('.gLFyf');
     })

     
it('find element by id', ()=>{  //ONLY to execute only this TC
    cy.visit('/');
    cy.get('# id name');
     })

     it.only('find element by class name', ()=>{  //ONLY to execute only this TC
        cy.visit('/');
        cy.get('.class name');
         })

 it('find the first element ', ()=>{  
 cy.visit('/');
 cy.get('html inspect').first();
})