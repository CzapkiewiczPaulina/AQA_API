/// <reference types="cypress" />

describe('GET - httpbit return 200', () => {
    it('resposne should be 200', () => {
        cy.request('https://httpbin.org/').its('status').should('eq',200);
    });
});

describe('GET - httpbit work with response', () => {
    it('resposne should be 200', () => {
        cy.request('https://httpbin.org/').then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    });
});

describe('GET - httpbit incorrect url', () => {
    const request = {
        url: 'https://httpbin.org/non-exist-url',
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