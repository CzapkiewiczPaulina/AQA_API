/// <reference types="cypress" />

describe('POST - httpbit incorrect url', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }

    it('resposne should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    });
});