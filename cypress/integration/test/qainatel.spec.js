describe('Acessando o DemoBlaze', ()=>{

    beforeEach(()=> {
        cy.viewport(1920, 1080)
        cy.wait(2000)
    })

    it('Buscado a aba de monitores', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(1000)
        buscaMonitores()
    })

    it('Passando e voltando de tela', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(1000)
        cy.get('#next2').click()
        cy.wait(1000)
        cy.get('#prev2').click()
    })

    it('Acessando um item da lista que nn existe', () => {
        cy.get('.list-group-item').eq(4).click() //Teste negativo
    })

    it('Preenchendo os campos de login e voltando a tela inicial', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').click().type('leoteste@inate.br')
        cy.get('#loginpassword').click().type('deviaSerForms123')
        cy.visit('https://www.demoblaze.com/index.html')
        
    })
})

function buscaMonitores() {
    cy.get('.list-group-item').eq(3).click()
}