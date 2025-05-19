# Cypress API Tests for Reqres.in

This repository contains automated API tests for the Reqres.in REST API using Cypress. The tests cover various endpoints such as GET, POST, PUT, DELETE, and more, ensuring the API functionality works as expected.

## Project Overview
- **Purpose**: Automate testing of the Reqres.in API to validate responses and behavior.
- **Tools**: Cypress for API testing.
- **API**: https://reqres.in/

## Prerequisites
- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)
- Git (for version control)

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/redyana18/cypress-reqres-api-tests.git
2. Navigate to the Project Directory:
   ```bash
   cd cypress-reqres-api-tests
3. Install Dependencies:
   ```bash
   npm install
4. Open Cypress:
   ```bash
   npx cypress open
Select reqres_api_tests.js from the Cypress UI to run the tests.

## Tests Included
* GET - List Users: Verifies the list of users endpoint.
* GET - Single User: Checks a specific user by ID.
* POST - Create User: Tests creating a new user.
* PUT - Update User: Validates updating an existing user.
* DELETE - Delete User: Ensures user deletion works.
* POST - Register Successful: Tests successful registration.
* POST - Login Successful: Verifies successful login.
* POST - Login Failed: Checks login failure with missing credentials.

## API Key
This project uses the Reqres.in Free API Key (reqres-free-v1). The key is included in the test headers. Ensure you have signed up at https://reqres.in/signup to obtain your own key if needed.
