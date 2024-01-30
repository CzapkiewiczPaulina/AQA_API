describe("Testy dla API https://httpbin.org", () => {
  // Test 1: Test metody POST
  it("Test metody POST", () => {
    cy.request("POST", "https://httpbin.org/post", { data: "example" }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("data", "example");
      }
    );
  });

  // Test 2: Test metody POST
  it("Test metody POST", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      body: {
        key: "value",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("json");
      expect(response.body.json).to.have.property("key", "value");
    });
  });

  // Test 3: Test metody POST
  it("resposne should be 200", () => {
    cy.request(request).then((response) => {
      const currentStatus = response.status;
      const expectedStatus = 200;

      assert.equal(expectedStatus, currentStatus);
    });
  });

  // Test 4: Test metody GET
  it("Test metody GET", () => {
    cy.request("GET", "https://httpbin.org/get").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("url");
    });
  });

  // Test 5: Test wysyłania i sprawdzania nagłówków
  it("Test nagłówków", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        "User-Agent": "Cypress Testing",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.nested.property(
        "headers.User-Agent",
        "Cypress Testing"
      );
    });
  });

  // Test 6: Test wysyłania parametrów zapytania
  it("Test parametrów zapytania", () => {
    cy.request("GET", "https://httpbin.org/get", {
      param1: "value1",
      param2: "value2",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.have.property("param1", "value1");
      expect(response.body.args).to.have.property("param2", "value2");
    });
  });

  // Test 7: Test wysyłania losowych parametrów zapytania
  it("Test losowych parametrów zapytania", () => {
    const randomParam = Math.random().toString(36).substring(7);
    cy.request("GET", "https://httpbin.org/get", {
      randomParam: randomParam,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.have.property("randomParam", randomParam);
    });
  });

  // Test 8: Test sprawdzania treści odpowiedzi
  it("Test treści odpowiedzi", () => {
    cy.request("GET", "https://httpbin.org/html").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("text/html");
      expect(response.body).to.include("<html>");
    });
  });

  // Test 9: Test czasu trwania wniosku
  it("Test czasu trwania wniosku", () => {
    cy.request("GET", "https://httpbin.org/delay/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("url");
    });
  });
});
// Test 10: Test nagłówków
it("Test nagłówków", () => {
  cy.request({
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "User-Agent": "Cypress Testing",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.nested.property(
      "headers.User-Agent",
      "Cypress Testing"
    );
  });
});
