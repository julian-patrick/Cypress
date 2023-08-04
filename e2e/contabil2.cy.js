
/// <reference types = 'cypress' />

//const { multiply } = require("cypress/types/lodash");

//const { multiply } = require("cypress/types/lodash");

///const { should } = require("chai");

 

context('Realizar o login no Contabil', () =>{

 

    Cypress.on('uncaught:exception', (err, runnable) => {

       //returning false here prevents Cypress from

        //failing the test

        return false
    });

 

beforeEach(() => {

cy.visit('http://atual.sisprevweb.com.br/contabilweb02/login.aspx')
cy.clearAllCookies()


});

 

it('Realizando o login', () => {

   
    cy.get('#TABLEMAIN').click()
    cy.get('#vUSERNAME').click()
    cy.get('#vUSERNAME').type('1251')
    cy.get('#vUSERPASSWORD').click()
    cy.get('#vUSERPASSWORD').type('ef2g92')
    cy.get('#BTNENTER').click();
    cy.get('#TABLETITLE_MPAGE> .row:nth-child(2)> .col-xs-12').click() 
    cy.get('.open> .menu-dropdown').click()
    cy.get('.open:nth-child(2)> .menu-dropdown > .menu-text').click()
    //cy.get('.open:nth-dropdown > .menu-text').click()
    cy.get('#31 04> .menu-text').click()
    
    cy.get('#sidebar_ul > li.open > ul > li.open > a > span').click() 
      
   // cy.url().should('contains','http://atual.sisprevweb.com.br/contabilweb02/iniciofavoritos.aspx')
    cy.get('.open > .menu-dropdown').click()
    cy.get('#BTNINSERT').click()
    cy.get('#I25EPN_DATA_dp_trigger').click()
    cy.get('.today').click()
    cy.get('#vI25EPN_COMPETENCIA').click()
    cy.get('#I25EPN_TIPO').click()
    cy.get('#I25EPN_NMRPROCESSO').click()
    cy.get('#vLIQDATA').click()
    cy.get('#I25EPN_CTRID').click()
    cy.get('#PROMPT_2019').click()
    cy.url().should('contains', 'http://atual.sisprevweb.com.br/contabilweb02/contratoprompt.aspx')
    cy.get('#PROMPT_774').click()
    cy.url().should('contains', 'http://atual.sisprevweb.com.br/contabilweb02/despesaprompt.aspx')
    cy.get('#I25EPN_TIPODESPESA').click()
    cy.get('#I25EPN_TIPODESPESA').type('4')
    cy.get('#I25EPN_TIPODESPESA').click()
    cy.get('#I25EPN_VALOR').type('100,00')
    cy.get('#vHISTORICO').type('teste1')
    cy.get('#BTNTRN_ENTER').click()


});
});

  //cy.get('.LoginUserName').click()

    //cy.get('#vUSERNAME').invoke('val', '1251') 

    //cy.get('#vUSERPASSWORD').invoke('val', 'xz1bca')

    //cy.get('#BTNENTER').click()

    //cy.get('#sidebar_ul > :nth-child(5) > :nth-child(1) > .menu-text').click()  
    //cy.xpath("//ul//span[contains(text(), 'Contabilidade')]//ancestor-or-self::a").click()
    //cy.xpath("//ul//span[contains(text(), 'Financeiro')]//ancestor-or-self::a").click()
    //cy.xpath("//ul//span[contains(text(), 'Empenho')]//ancestor-or-self::a").click()({multiple: true}, {force: true})
    //cy.xpath('//*[@id="104"]/span').then((element) => { 
    //cy.wrap(element).click()
    
    //cy.xpath('//*[@id="BTNINSERT"]').then((element) => {

    //cy.wrap(element).click();
    //cy.get('#BTNINSERT').then((element) => {

       // cy.wrap(element).click()
       

   // });

    




