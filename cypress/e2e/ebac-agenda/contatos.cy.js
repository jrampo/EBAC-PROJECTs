describe("Testes de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve adicionar um contato", () => {
    cy.get('input[type="text"]').type("contato para remover");
    cy.get('input[type="email"]').type("contatopararemover@email.com");
    cy.get('input[type="tel"]').type("123456789");
    cy.get("button").contains("Adicionar").click();

    cy.contains("contato para remover").should("exist");
  });

  it("Deve alterar um contato", () => {
    cy.get('input[type="text"]').type("contato para alterar qejao");
    cy.get('input[type="email"]').type("contatoalterar@email.com");
    cy.get('input[type="tel"]').type("123456789");
    cy.get("button").contains("Adicionar").click();

    cy.contains("contato para alterar qejao")
      .parent()
      .parent()
      .parent()
      .find("button")
      .contains("Editar")
      .click();

    cy.get('input[type="text"]').clear().type("contato alterado qejao");
    cy.get('input[type="email"]').clear().type("contatoalterado@email.com");
    cy.get('input[type="tel"]').clear().type("987654321");
    cy.get("button").contains("Salvar").click();

    cy.contains("contato alterado qejao").should("exist");
    cy.contains("contato para alterar qejao").should("not.exist");
  });

  it("Deve remover todos os contatos", () => {
    cy.get('input[type="text"]').type("Contato 1");
    cy.get('input[type="email"]').type("contato1@email.com");
    cy.get('input[type="tel"]').type("111111111");
    cy.get("button").contains("Adicionar").click();

    cy.get('input[type="text"]').type("Contato 2");
    cy.get('input[type="email"]').type("contato2@email.com");
    cy.get('input[type="tel"]').type("222222222");
    cy.get("button").contains("Adicionar").click();

    cy.get("button[class='delete']").each(($btn) => {
      cy.wrap($btn).click();
    });

    cy.contains("Contato 1").should("not.exist");
    cy.contains("Contato 2").should("exist");
  });
});
