

describe('Transações', () => {


// hooks -> executar antes ou depois de cada ou de todos os testes
// before
// after
// beforeEach
// afterEach

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

    });

    it('Cadastrar uma entrada', () => {
       
        criarTransacao("alimento", 250)
       

        cy.get("tbody tr td.description").should("have.text", "alimento")
    });


    it( 'Cadastrar uma saida', () => {
        criarTransacao("Cinema", -75)

        cy.get("tbody tr td.description").should("have.text", "Cinema")

    });
});

    function criarTransacao(descricao, valor){
        cy. contains("Nova Transação").click()
        cy. get('#description').type(descricao)
        cy. get('#amount').type(valor)
        cy.get('#date').type("2023-03-15")//yyyy-mm-dd

        cy.contains( 'button', 'Salvar').click()


    }