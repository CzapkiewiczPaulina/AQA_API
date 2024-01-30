/// <reference types="cypress" />

describe('POST - httpbit with Body', () => {
    const bodyRequest = {
        userName: "Test"
    }

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyRequest,
        failOnStatusCode: false
    }

    it('resposne should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const responseData = JSON.parse(response.body.data)

            assert.equal(bodyRequest.userName, responseData.userName)
            assert.notStrictEqual(bodyRequest, response.body.data)
            assert.equal(expectedStatus, currentStatus);
        });
    });
});