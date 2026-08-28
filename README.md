#  FindIt-UserAuth

FindIt-UserAuth is a Node.js, Express, and MongoDB authentication API developed as a focused implementation of **Level 3 Task 2: User Authentication System of Codveda Technologies Internship**.

The project provides a secure backend authentication system that allows users to register, log in, access protected routes, manage their profiles, and reset forgotten passwords.

The application demonstrates the practical use of **JWT authentication, password hashing with bcrypt, MongoDB, Mongoose, Express middleware, request validation, and REST API development**.

---

## Task 2 Requirements

The assignment requires:

- Setting up user registration and login functionality using a back-end server
- Using JWT or session-based authentication to manage user sessions
- Securing sensitive/protected routes
- Implementing password hashing

### Requirements Completed

| Requirement | Implementation | Status |
|---|---|---|
| Backend Server | Node.js + Express.js | ✅ |
| User Registration | Express REST API | ✅ |
| User Login | Express REST API | ✅ |
| Database | MongoDB Atlas | ✅ |
| Database ODM | Mongoose | ✅ |
| Password Hashing | bcrypt | ✅ |
| Authentication | JWT | ✅ |
| Protected Routes | Authentication Middleware | ✅ |
| Request Validation | express-validator | ✅ |
| Password Reset | JWT/token-based reset flow | ✅ |
| User Profile | Protected profile endpoints | ✅ |
| API Testing | Postman | ✅ |

---

# Tech Stack

The project uses the following technologies:

- **Node.js** — JavaScript runtime environment
- **Express.js** — Backend web framework
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling library
- **JWT (JSON Web Token)** — Authentication and authorization
- **bcrypt** — Secure password hashing
- **express-validator** — Request validation
- **dotenv** — Environment variable management
- **Nodemailer** — Email functionality for password reset
- **Postman** — API testing

---

#  Authentication Features

The API implements the following authentication features:

- User registration
- User login
- Password hashing
- Password comparison during login
- JWT generation
- JWT verification
- Protected routes
- Authenticated user profile
- Profile updates
- Forgot password functionality
- Password reset functionality
- Request validation
- Authentication error handling

---

#  Authentication Flow

The authentication process follows this general flow:

```text
                  USER
                    │
                    ▼
             Register Account
                    │
                    ▼
             Validate Details
                    │
                    ▼
          Hash Password with bcrypt
                    │
                    ▼
              MongoDB Database
                    │
                    ▼
              Login Account
                    │
                    ▼
          Compare Password with bcrypt
                    │
                    ▼
             Generate JWT Token
                    │
                    ▼
          Protected API Requests
                    │
                    ▼
             Verify JWT Token
                    │
                    ▼
             Access Protected Data
```

---

#  Project Structure

```text
FindIt-UserAuth/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   │   
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── validate.js
│   │   └── validateRequest.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   ├── appError.js
│   │   ├── generateToken.js
│   │   └── sendEmail.js
│   │
│   ├── validators/
│   │   └── authValidator.js
│   │
│   └── app.js
│   └── server.js
│
├── postman/
│   └── FindIt-UserAuth.postman_collection.json
│
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

---

#  Project Structure Explained

The project follows a modular backend architecture that separates routing, business logic, database operations, validation, authentication, and utility functions.

The general request flow is:

```text
Client Request
      ↓
    Routes
      ↓
  Middleware
      ↓
 Controllers
      ↓
   Services
      ↓
    Models
      ↓
   MongoDB
```

This separation of responsibilities makes the application easier to understand, test, maintain, and extend.

---

## `src/config/db.js`

Contains the MongoDB database connection configuration.

The application uses **Mongoose** to establish and manage the connection between the Express server and MongoDB.

The database connection is initialized when the application starts.

---

## `src/controllers/authController.js`

Contains the controller functions responsible for handling authentication-related HTTP requests.

The controller receives requests from the authentication routes and communicates with the appropriate service.

Responsibilities include:

- Handling user registration requests
- Handling user login requests
- Handling forgot-password requests
- Handling password reset requests
- Returning appropriate HTTP responses
- Handling authentication-related errors

The controller focuses mainly on handling the **HTTP request and response**, while the main business logic is delegated to `authService.js`.

---

## `src/controllers/userController.js`

Contains controller functions for user-related operations.

Responsibilities include:

- Retrieving the authenticated user's profile
- Updating user profile information
- Returning appropriate HTTP responses
- Handling user-related errors

The controller communicates with `userService.js` for the underlying business logic.

---

## `src/middleware/authMiddleware.js`

Protects routes that require authentication.

The middleware:

1. Checks for an Authorization header
2. Extracts the Bearer token
3. Verifies the JWT
4. Identifies the authenticated user
5. Attaches the authenticated user information to the request
6. Allows the request to continue

If the token is missing, invalid, or expired, the request is rejected.

This middleware is an important part of the Task 2 requirement because it ensures that sensitive routes cannot be accessed without valid authentication.

---

## `src/middleware/validate.js`

Contains validation-related middleware used to process validation rules and handle validation errors.

It helps ensure that invalid request data is identified before it reaches the controller or service layer.

Examples of data that can be validated include:

- Email format
- Required fields
- Password requirements
- Profile information

---

## `src/middleware/validateRequest.js`

Provides request validation handling for the application.

It processes the results of the validation rules defined in the validators and returns a structured error response when validation fails.

This keeps validation error handling consistent across the API.

---

## `src/models/User.js`

Defines the MongoDB schema and model for users.

The User model contains information such as:

- Name
- Email
- Phone number
- Password
- Created date
- Updated date

The password is stored as a **bcrypt hash**, not as plain text.

Mongoose uses this model to create, retrieve, update, and manage user records in MongoDB.

---

## `src/routes/authRoutes.js`

Contains the authentication-related API routes.

These routes provide endpoints for operations such as:

- User registration
- User login
- Forgot password
- Reset password
- Retrieving authenticated user information

The routes connect incoming HTTP requests to the appropriate authentication controllers.

Example route flow:

```text
POST /api/auth/register
        ↓
authRoutes.js
        ↓
authController.js
        ↓
authService.js
        ↓
User.js
        ↓
MongoDB
```

---

## `src/routes/userRoutes.js`

Contains routes for authenticated user profile operations.

These routes are protected by `authMiddleware.js` where authentication is required.

The routes provide functionality such as:

- Getting the user's profile
- Updating the user's profile

Example:

```text
GET /api/users/profile
        ↓
authMiddleware.js
        ↓
userController.js
        ↓
userService.js
        ↓
User.js
        ↓
MongoDB
```

---

# Services

The service layer contains the main business logic of the application.

This layer separates application logic from HTTP request/response handling.

---

## `src/services/authService.js`

Contains the core business logic for authentication.

Responsibilities include:

- Checking whether a user already exists
- Creating new users
- Hashing passwords with bcrypt
- Comparing passwords during login
- Generating authentication tokens
- Handling password reset logic
- Retrieving authenticated user information

The service communicates with the `User` model when user data needs to be created, retrieved, or updated.

This separation keeps the authentication logic out of the route and controller files.

---

## `src/services/userService.js`

Contains the business logic for user profile operations.

Responsibilities include:

- Finding users
- Retrieving user profile information
- Updating user profile information
- Managing user-related database operations

The service communicates with the `User` model to perform the required database operations.

---

#  Utilities

The `utils` folder contains reusable helper functions used throughout the application.

---

## `src/utils/appError.js`

Contains the custom application error implementation.

It provides a consistent way to create and handle application-specific errors.

This helps the application return meaningful HTTP status codes and error messages.

---

## `src/utils/generateToken.js`

Contains the helper function responsible for generating JWT authentication tokens.

Instead of generating tokens directly in multiple controllers or services, token generation is centralized in this utility.

The generated JWT is used to authenticate requests to protected routes.

The JWT secret is stored securely using an environment variable.

---

## `src/utils/sendEmail.js`

Contains the email-sending functionality used by the authentication system.

It is primarily used for features such as password reset.

This utility separates email functionality from the authentication business logic, making the code easier to maintain.

---

# Validators

## `src/validators/authValidator.js`

Contains validation rules for authentication and user-related requests.

The validator helps ensure that incoming data meets the expected requirements before it reaches the application's business logic.

Validation can include:

- Required fields
- Valid email format
- Password requirements
- Password confirmation
- Profile information

The validation rules work together with:

```text
validate.js
validateRequest.js
```

to provide consistent request validation and error handling.

---

# Application Entry Points

## `src/app.js`

Creates and configures the Express application.

Responsibilities include:

- Initializing Express
- Enabling JSON request parsing
- Registering middleware
- Registering authentication routes
- Registering user routes
- Configuring API behavior
- Handling application-level errors

The application is exported so that the server can start it separately.

---

## `src/server.js`

Starts the Express server.

It is responsible for:

- Loading environment variables
- Connecting to MongoDB
- Starting the HTTP server
- Listening on the configured port

The server can be started using:

```bash
npm run dev
```

---

# Postman

## `postman/FindIt-UserAuth.postman_collection.json`

Contains the Postman collection used to test the authentication API.

The collection can contain requests for:

- User registration
- User login
- Protected profile access
- Profile updates
- Forgot password
- Password reset
- Authentication error scenarios

The Postman collection provides a convenient way to demonstrate that the API works without requiring a frontend application.

---

# `package.json`

Contains the project's metadata, scripts, and dependencies.

The dependencies used for this authentication project include technologies such as:

- Express
- Mongoose
- bcrypt
- JSON Web Token
- express-validator
- dotenv
- Nodemailer

The `scripts` section provides commands for running the application in development and production environments.

---

# `package-lock.json`

Automatically generated by npm.

It records the exact dependency versions installed for the project and helps ensure that the project can be installed consistently on another computer.

---

# `.env`

Contains environment-specific configuration such as:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

The actual `.env` file should **not be committed to GitHub** because it may contain sensitive credentials and secrets.

For submission, use:

```text
.env.example
```

instead.

Example:

```env
MONGO_URI=
JWT_SECRET=
PORT=5000
```

---

# `.gitignore`

Specifies files and folders that Git should not track.

At minimum, it should contain:

```text
node_modules/
.env
```

This prevents dependencies and sensitive environment variables from being uploaded to GitHub.

---

# `README.md`

Contains the project documentation.

It explains:

- Project purpose
- Task 2 requirements
- Technologies used
- Project structure
- Authentication flow
- API endpoints
- Setup instructions
- Environment variables
- Postman testing
- Security measures

---

# Overall Architecture

The project follows a layered architecture:

```text
                    CLIENT
                      │
                      ▼
                   ROUTES
                      │
                      ▼
                 MIDDLEWARE
                ┌─────┴─────┐
                │           │
          Authentication   Validation
                │           │
                └─────┬─────┘
                      ▼
                 CONTROLLERS
                      │
                      ▼
                   SERVICES
                      │
                      ▼
                   MODELS
                      │
                      ▼
                  MONGODB
```

### Responsibilities

| Layer | Responsibility |
|---|---|
| Routes | Define API endpoints |
| Middleware | Authentication and request validation |
| Controllers | Handle HTTP requests and responses |
| Services | Contain business logic |
| Models | Define and interact with database data |
| Config | Manage database configuration |
| Utils | Provide reusable helper functions |
| Validators | Define request validation rules |

This architecture demonstrates a clear **separation of concerns** and makes the authentication system easier to maintain and extend.
---

# API Testing with Postman

The authentication API was tested using Postman.

A Postman collection is included in:

```text
postman/FindIt-UserAuth.postman_collection.json
```

The collection can be imported directly into Postman.

---

#  Recommended Testing Order

For the easiest demonstration of the authentication system, test the endpoints in this order:

### 1. Register

```http
POST /api/auth/register
```

Create a new user.

---

### 2. Login

```http
POST /api/auth/login
```

Use the registered email and password.

Copy the JWT returned by the API.

---

### 3. Test Protected Route Without Token

```http
GET /api/auth/me
```

Do not provide an Authorization header.

Expected result:

```text
401 Unauthorized
```

This demonstrates that the route is protected.

---

### 4. Test Protected Route With Token

Add:

```http
Authorization: Bearer <JWT_TOKEN>
```

Then send:

```http
GET /api/auth/me
```

Expected result:

```text
200 OK
```

This demonstrates successful JWT authentication.

---

### 5. Get Profile

```http
GET /api/users/profile
```

Include the JWT.

---

### 6. Update Profile

```http
PATCH /api/users/profile
```

Include the JWT and provide updated profile information.

---

### 7. Test Password Reset

Test:

```http
POST /api/auth/forgot-password
```

followed by:

```http
PATCH /api/auth/reset-password/:token
```

if the email/password reset functionality is configured in the local environment.

---

# Authentication Test Summary

| Test | Expected Result | Status |
|---|---|---|
| Register new user | User created | ✅ |
| Register duplicate email | Request rejected | ✅ |
| Login with valid credentials | JWT returned | ✅ |
| Login with incorrect password | Request rejected | ✅ |
| Access protected route without token | 401 Unauthorized | ✅ |
| Access protected route with valid JWT | 200 OK | ✅ |
| Access protected route with invalid JWT | 401 Unauthorized | ✅ |
| Get authenticated profile | User information returned | ✅ |
| Update profile | Profile updated | ✅ |
| Password reset request | Reset process initiated | ✅ |
| Reset password | Password updated securely | ✅ |

---

# Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/benbash/Codveda-Internship.git
```

Navigate into the project:

```bash
cd FindIt-UserAuth
```

---

## 2. Install Dependencies

Run:

```bash
npm install
```

This installs all required backend dependencies.

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Replace the placeholders with your actual configuration values.

---

# Start the Application

For development:

```bash
npm run dev
```

For production-style execution:

```bash
npm start
```

The API should then be available at:

```text
http://localhost:5000
```

---

#  Environment Variables

The project requires the following environment variables:

```env
MONGO_URI=
JWT_SECRET=
PORT=
```

A `.env.example` file is included to show the required configuration.

### Important

The actual `.env` file should **not** be uploaded to GitHub because it may contain:

- MongoDB credentials
- JWT secrets
- Email credentials
- Other private configuration

---

# Database

The project uses **MongoDB** to persist user information.

Mongoose is used to define the User schema and communicate with the database.

A typical user record contains information similar to:

```json
{
  "_id": "MongoDB generated ID",
  "name": "Bash Benshak",
  "email": "bash@example.com",
  "phoneNumber": "08012345678",
  "password": "bcrypt hashed password",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

The password value shown above represents a bcrypt hash and not the user's original password.

---

# Separation of Responsibilities

The project uses a simple separation of concerns:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

### Routes

Define the API endpoints.

### Controllers

Contain the authentication and profile business logic.

### Middleware

Handles authentication and validation.

### Models

Define the structure of data stored in MongoDB.

### Configuration

Handles the MongoDB connection and environment configuration.

This structure makes the project easier to understand, maintain, test, and expand.

---

# Error Handling

The API handles common authentication errors, including:

- Missing required fields
- Invalid email
- Invalid password
- Duplicate email
- User not found
- Missing authentication token
- Invalid JWT
- Expired JWT
- Invalid MongoDB ID
- Invalid password reset token
- Database errors

Example authentication error:

```json
{
  "success": false,
  "message": "Authentication required"
}
```

---

# Security Measures

The project implements several basic security practices:

- Passwords are hashed using bcrypt
- Passwords are never returned in API responses
- JWT is used to authenticate protected requests
- Protected routes verify JWT tokens
- JWT secret is stored in environment variables
- MongoDB credentials are stored in environment variables
- Request data is validated
- Invalid authentication attempts are rejected

---

# Learning Objectives

This project demonstrates practical understanding of:

- Node.js backend development
- Express.js
- REST API development
- MongoDB
- Mongoose
- User registration
- User login
- Password hashing
- bcrypt
- JWT authentication
- Protected routes
- Authentication middleware
- Request validation
- Environment variables
- Password reset flows
- API testing with Postman
- Backend project structure

---

# Future Improvements

Possible future improvements include:

- Refresh token implementation
- Token revocation/blacklisting
- Role-based access control
- Email verification
- Two-factor authentication
- Rate limiting
- Account lockout after repeated failed login attempts
- OAuth/social login
- Production deployment
- Frontend authentication interface

These features are outside the scope of the current Task 2.

---

# Acknowledgements

This project was developed as part of a practical full-stack web development task as an Intern at Codveda Technologies and my continuous learning journey in software development.

The project provided an opportunity to apply authentication concepts including:

- User registration
- Login
- Password hashing
- JWT authentication
- Protected routes
- MongoDB database integration
- Express middleware
- API validation
- Password reset functionality

---

# License

This project is created for educational and portfolio purposes.
