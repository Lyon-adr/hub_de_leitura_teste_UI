describe('funcionalidade: contato', () => {

beforeEach(() => {
    cy.visit('index.html') 
  });



  it('deve preencher formulario de contato com sucesso', () => {

    //implementação do primeiro teste
    cy.get('[name="name"]').type('fabin')
    cy.get('[name="email"]').type('samambaia@xpzinho.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('se eu soubesse, soubedo, sabido, soubido, sandro, eu nem vinha')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')

  });

  it("deve validar mensagem de erro ao enviar sem preencher nome", () => {

    cy.get('[name="name"]').clear('')
    cy.get('[name="email"]').type('samambaia@xpzinho.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('se eu soubesse, soubedo, sabido, soubido, sandro, eu nem vinha')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Por favor, preencha o campo Nome').should('exist')


  });

  it("deve validar mensagem de erro ao enviar sem preencher E-mail", () => {

    cy.get('[name="name"]').type('fabin')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('se eu soubesse, soubedo, sabido, soubido, sandro, eu nem vinha')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Por favor, preencha o campo E-mail').should('exist')

  });

  it("deve validar mensagem de erro ao enviar sem selecionar o assunto", () => {

    cy.get('[name="name"]').type('fabin')
    cy.get('[name="email"]').type('samambaia@xpzinho.com')
    cy.get('[name="message"]').type('se eu soubesse, soubedo, sabido, soubido, sandro, eu nem vinha')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Por favor, selecione o Assunto').should('exist')

  });

  it("deve validar mensagem de erro ao enviar sem preencher a mensagem", () => {

    cy.get('[name="name"]').type('fabin')
    cy.get('[name="email"]').type('samambaia@xpzinho.com')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').clear('')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Por favor, escreva sua Mensagem').should('exist')

  });



})