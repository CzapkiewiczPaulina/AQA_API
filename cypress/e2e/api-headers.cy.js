/// <reference types="cypress" />

describe('GET - API headers', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
            "customHeader": "customVaule"
        },
        failOnStatusCode: false
    }

    it('resposne and headers shoudl be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentHeaderValue = response.requestHeaders.customHeader

            assert.equal('customVaule', currentHeaderValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(response.requestHeaders);
            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});

describe('GET - API User Agent', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
            "User-Agent": "My-test-user-agent"
        },
        failOnStatusCode: false
    }

    it('resposne and user agent shoudl be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentUserAgentValue = response.requestHeaders['User-Agent']

            assert.equal('My-test-user-agent', currentUserAgentValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});


describe('GET - API Cookie', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "Cookie": "cookieName=cookieValue"
        },
        failOnStatusCode: false
    }

    it('resposne and user agent shoudl be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentCookieValue = response.requestHeaders['Cookie']

            assert.equal('cookieName=cookieValue', currentCookieValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});