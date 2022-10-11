describe('My first Test', () => {
  it('Does not do much', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('https://test-learn.ada-school.org')
    expect(true).to.equal(true)
  })
})