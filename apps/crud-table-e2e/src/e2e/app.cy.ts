describe('crud-table', () => {
  beforeEach(() => cy.visit('/'));

  it('should redirect to /fruits', () => {
    cy.url().should('include', 'fruits');
  });
});
