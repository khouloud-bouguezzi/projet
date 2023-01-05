
/// <reference types="cypress" />



     it('select and check command', ()=>{ 
        cy.visit('https://codenboxautomationlab.com/practice/');
       // cy.get('[for="radio2"] > .radioButton').check(); on peut ecrire soit cette ligne soit celle en dessous
        cy.get('input[value="radio2"]').check();
        cy.get('#dropdown-class-example').select(2);
        cy.get('#search-2 > #searchform > .search-input').type('automation');
         })
    
         it.only('verify alert window', ()=>{ 
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('#alertbtn').click();
            cy.on('window:alert', (str)=>{
                expect(str).to.equal('Hello , share this practice page who love to learn automation');

            })
             })