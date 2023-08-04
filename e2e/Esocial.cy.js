/// <reference types = 'cypress' />

 

context('Realizar o login no Contabil', () =>{

 

    Cypress.on('uncaught:exception', (err, runnable) => {

        // returning false here prevents Cypress from

        // failing the test

        return false

    });

 

beforeEach(() => {

cy.visit('http://proxima.sisprevweb.com.br/esocial_analista13/')

});

 

it('Realizando o login', () => {

    // Localizar o elemento pelo XPath
    cy.xpath('//*[@id="mat-input-0"]').then((element) => {
    // Agora você pode interagir com o elemento usando os comandos Cypress
    // Por exemplo, você pode digitar algo no input:
    cy.wrap(element).type('1251')
  
    // Ou clicar no elemento:
    cy.wrap(element).click()
  
    // Ou verificar se o elemento está visível:
    cy.wrap(element).should('be.visible')
    });


  it('Inserindo a senha', () => {  
    cy.xpath('//*[@id="mat-input-1"]').then((Element) => {

    cy.wrap(element).type('xz1bca')
  
    // Ou clicar no elemento:
    cy.wrap(element).click()
  
    // Ou verificar se o elemento está visível:
    cy.wrap(element).should('be.visible')

     });
    });
});
});






    //cy.get('.LoginUserName').click()
   // document.querySelector("#mat-input-0").invoke('val', '1251') 

    //cy.get('#BTNINSERT').invoke('val', '1251') 

    //cy.get('#vUSERPASSWORD').invoke('val', 'xz1bca')

    //cy.get('#BTNENTER').click()

    // // cy.get('#sidebar_ul > :nth-child(5) > :nth-child(1) > .menu-text').click()  
    //cy.xpath("//ul//span[contains(text(), 'Contabilidade')]//ancestor-or-self::a").click()
    //cy.xpath("//ul//span[contains(text(), 'Financeiro')]//ancestor-or-self::a").click()
    //cy.xpath("//ul//span[contains(text(), 'Empenho')]//ancestor-or-self::a").click({multiple: true})//, force: true})
   // cy.get('#BTNINSERT').click()
    //cy.get('input[name="BTNINSERT"]').click()
   // cy.get('I00EXE_ANO').click()

   // cy.visit('http://atual.sisprevweb.com.br/contabilweb01/login.aspx');
    ///cy.get('.open > .menu-dropdown').click();
    //cy.get('.open:nth-child(2) > .menu-dropdown').click();
    

    // cy.get('.gx-warning-message')
     

    // cy.get('.fa-university').click()

    // cy.get('#span_vUPDATE_0001 > a > .fa').click()

   

   

//});

 

//});