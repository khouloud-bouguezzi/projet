/// <reference types="cypress" />

it('should be able to open a website in different views', ()=>{
   // cy.viewport(550,750)

   //cy.viewport("iphone-6") ça donne le view d'un iphone
   
   cy.viewport("iphone-6")
   cy.visit("/");
    })

    it('should be able to open a website in different views', ()=>{
        cy.viewport("macbook-16")
        cy.visit("/");
         })

         //au lieu de faire l'action precedente on peut faire aussi comme suit:
        /* ['iphone-8', 'ipad-mini', 'macbook-15'].forEach(
            (viewport) => {
                it('should be able to open a website in different views', ()=>{
                    cy.viewport(viewport);
                     cy.visit("/");
                })
            
         }); */