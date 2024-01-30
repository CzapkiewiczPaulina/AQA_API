/// <reference types="cypress" />

//https://httpbin.org/get?key=value

describe('GET - httpbit incorrect url', () => {
    const request = {
        url: 'https://httpbin.org/get',
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    }

    it('resposne and data should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currectArgValue = response.body.args.key
            const expectedArgValue = 'value' 

            assert.equal(expectedStatus, currentStatus);
            assert.equal(expectedArgValue, currectArgValue);

            cy.log(response.body.args)
        });
    });
});