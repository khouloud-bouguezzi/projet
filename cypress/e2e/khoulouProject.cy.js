/// <reference types="cypress" />

describe('login functionality', ()=>{

before(()=>{
  cy.log('i am inside the before hook')
})
beforeEach(()=>{
  cy.log('i am inside the before each hook')
})

after(()=>{
  cy.log('i am inside the after hook')
})

afterEach(()=>{
  cy.log('i am inside the after each hook')
})


  it('log something in cypress', () => {
    cy.log('i am inside a test case')
  })

  it('test case number2', function() {
      cy.log('i am inside a test case')
    })
  })

  context('order functionality', ()=>{

    it('log something in cypress', () => {
      cy.log('i am inside a test case')
    })
  
    it('test case number2', function() {
        cy.log('i am inside a test case')
      })
    })