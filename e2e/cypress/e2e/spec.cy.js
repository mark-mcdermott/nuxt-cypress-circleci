describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://frontend:3000')
    cy.get('h2').contains('Welcome')
  })
})