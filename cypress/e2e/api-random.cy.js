describe('Test API Random Data', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    const requestDuration = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        failOnStatusCode: false
    }

    it('random data ', () => {
        for (let index = 0; index < 10; index++) {
            const randomId = getRandomInt(1000)

            const bodyData = {
                userName: `Test ${randomId}`
            }
        
            const requestRandom = {
                method: 'POST',
                url: 'https://httpbin.org/post',
                body: bodyData,
                failOnStatusCode: false
            }

            cy.request(requestRandom).then(response => {
                assert.equal(200, response.status);
                cy.log(response.body)
            });
        }
    });
});