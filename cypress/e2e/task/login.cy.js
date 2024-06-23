describe('template spec', () => {
    it('Login a user', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        expect('Username').to.exist;
        expect('input[name="username"]').to.exist;
        expect('Password').to.exist;
        expect('input[name="password"').to.exist;
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.contains('.post-title','Logged In Successfully').should('exist')
        cy.contains('.has-text-align-center', 'Congratulations student. You successfully logged in!').should('exist')
    })
})