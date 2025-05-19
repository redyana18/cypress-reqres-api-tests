describe("Reqres.in API Tests", () => {
  const baseUrl = "https://reqres.in/api";

  // Test GET List Users
  it("GET - List Users", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users?page=2`,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
      expect(response.body.data[0]).to.have.property("id");
    });
  });

  // Test GET Single User
  it("GET - Single User", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2`,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);
      expect(response.body.data).to.have.property("email");
      expect(response.body.data).to.have.property("first_name");
    });
  });

  // Test POST Create User
  it("POST - Create User", () => {
    const user = { name: "John Doe", job: "Developer" };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      body: user,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", user.name);
      expect(response.body).to.have.property("job", user.job);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });

  // Test PUT Update User
  it("PUT - Update User", () => {
    const updatedUser = { name: "John Doe Updated", job: "Senior Developer" };
    cy.request({
      method: "PUT",
      url: `${baseUrl}/users/2`,
      body: updatedUser,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", updatedUser.name);
      expect(response.body).to.have.property("job", updatedUser.job);
      expect(response.body).to.have.property("updatedAt");
    });
  });

  // Test DELETE User
  it("DELETE - Delete User", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/users/2`,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  // Test POST Register
  it("POST - Register Successful", () => {
    const credentials = { email: "eve.holt@reqres.in", password: "pistol" };
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      body: credentials,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
    });
  });

  // Test POST Login
  it("POST - Login Successful", () => {
    const credentials = { email: "eve.holt@reqres.in", password: "cityslicka" };
    cy.request({
      method: "POST",
      url: `${baseUrl}/login`,
      body: credentials,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  // Test POST Login Failed
  it("POST - Login Failed", () => {
    const credentials = { email: "peter@klaven" };
    cy.request({
      method: "POST",
      url: `${baseUrl}/login`,
      body: credentials,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Kembali ke 400 sesuai ekspektasi asli
      expect(response.body).to.have.property("error", "Missing password");
    });
  });
});
