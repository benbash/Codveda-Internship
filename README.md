# MealMate-CRUD

MealMate CRUD is a full-stack meal management application developed as part of the practical web development task for the Internship requirments at Codveda Technologies.

The project demonstrates how a React frontend communicates with an Express.js REST API to perform **Create, Read, Update, and Delete (CRUD)** operations while storing data in a MongoDB database.

The application was built with a focus on clean project structure, responsive design, API communication, database integration, and practical full-stack development.

---

##  Level 3 task Requirement

### Task 1: Build a Full-Stack CRUD Application

The assignment requires:

- A back-end server using Express or Django
- A REST API for CRUD operations
- A frontend built with React or Vue
- A database such as MongoDB or PostgreSQL
- Communication between the frontend and backend

### Requirements Covered

| Requirement | Implementation |
|---|---|
| Backend Server | Node.js + Express.js |
| REST API | Express REST API |
| Frontend | React.js |
| Database | MongoDB Atlas |
| Database ODM | Mongoose |
| API Communication | Axios |
| Create | ✅ |
| Read | ✅ |
| Update | ✅ |
| Delete | ✅ |
| Responsive UI | ✅ |

---

# Project Scope

This project focuses specifically on **Meal Management CRUD functionality**.

The application allows users to:

- Create new meals
- View all available meals
- View an individual meal
- Update existing meals
- Delete meals
- Store meal information in MongoDB
- Interact with the backend through REST API endpoints


---

# Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- Axios
- CSS3
- Vite

## Backend

- Node.js
- Express.js
- Mongoose
- dotenv

## Database

- MongoDB Atlas

## Development & Testing Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Compass

---

#    How the application works

The React frontend provides the user interface where users can create, view, update, and delete meals.

When an action is performed, the frontend sends an HTTP request to the Express backend using Axios.

The Express server receives the request and passes the required operation to the appropriate controller.

The controller communicates with MongoDB through Mongoose.

The result is then returned from:

MongoDB
   ↓
Mongoose
   ↓
Express
   ↓
Axios
   ↓
React

The React interface updates to reflect the latest database information.

#    Project Structure
MealMate-CRUD/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── meal.controller.js
│   │   │
│   │   ├── models/
│   │   │   └── Meal.js
│   │   │
│   │   ├── routes/
│   │   │   └── meal.routes.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .gitignore
│
└── README.md

#   Backend Structure Explained
src/config/db.js

Contains the MongoDB connection configuration.

It uses Mongoose to establish a connection between the Express application and MongoDB Atlas.

Express Application
        ↓
      db.js
        ↓
   MongoDB Atlas
src/models/Meal.js

Defines the structure of meal documents stored in MongoDB.

The model contains information such as:

Meal name
Slug
Description
Price
Category
Created date
Updated date

The Mongoose model ensures that meal data follows the expected structure.

src/controllers/meal.controller.js

Contains the logic for the CRUD operations.

The controller handles:

CREATE
READ
READ ONE
UPDATE
DELETE

Keeping this logic in the controller helps separate business logic from the routes.

src/routes/meal.routes.js

Defines the API routes for meal management.

The routes connect HTTP requests to the appropriate controller functions.

For example:

POST /api/meals
        ↓
createMeal()
src/app.js

Creates and configures the Express application.

It contains:

Express configuration
JSON middleware
CORS handling
API route registration

The meal routes are mounted under:

/api/meals
server.js

Starts the backend server and establishes the database connection.

The backend runs on:

http://localhost:3000

#   Frontend Structure Explained
src/App.jsx

Contains the main React application.

It handles:

Meal form
Meal listing
Creating meals
Editing meals
Deleting meals
Fetching meal data
Communicating with the backend API
src/App.css

Contains the styling for the React application.

It controls:

Page layout
Form styling
Meal cards
Buttons
Spacing
Typography
Responsive behavior
Mobile layout
src/main.jsx

The entry point for the React application.

It renders the main App component into the HTML root element.

index.html

The main HTML document used by Vite to load the React application.

React is mounted into:

<div id="root"></div>
REST API

The backend provides RESTful endpoints for managing meals.

Meal API Endpoints
Method	Endpoint	Description
POST	/api/meals	Create a new meal
GET	/api/meals	Get all meals
GET	/api/meals/:id	Get a single meal
PATCH	/api/meals/:id	Update a meal
DELETE	/api/meals/:id	Delete a meal

CREATE — Add a Meal

Creates a new meal in the database.

Request
POST /api/meals
Request Body
{
  "name": "Jollof Rice",
  "description": "Nigerian rice dish",
  "price": 3500,
  "category": "Nigerian"
}
Example Response
{
  "success": true,
  "message": "Meal created successfully",
  "data": {
    "_id": "meal_id",
    "name": "Jollof Rice",
    "slug": "jollof-rice",
    "description": "Nigerian rice dish",
    "price": 3500,
    "category": "Nigerian"
  }
}

The backend automatically generates a slug from the meal name.

For example:

Jollof Rice
     ↓
jollof-rice

READ — Get All Meals

Retrieves all meals stored in the database.

Request
GET /api/meals
Example Response
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "meal_id",
      "name": "Jollof Rice",
      "slug": "jollof-rice",
      "description": "Nigerian rice dish",
      "price": 3500,
      "category": "Nigerian"
    }
  ]
}

The React frontend uses this endpoint to display the available meals.

READ ONE — Get a Single Meal

Retrieves a specific meal using its MongoDB ID.

Request
GET /api/meals/:id

Example:

GET /api/meals/64abc123...

The endpoint returns the details of the requested meal.

UPDATE — Edit a Meal

Updates an existing meal.

Request
PATCH /api/meals/:id
Example Request Body
{
  "name": "Jollof Rice Deluxe",
  "description": "Nigerian jollof rice served with chicken",
  "price": 4500,
  "category": "Nigerian"
}

The updated information is saved to MongoDB and returned to the frontend.

If the meal name is changed, the corresponding slug is also updated.

For example:

Jollof Rice Deluxe
        ↓
jollof-rice-deluxe

DELETE — Remove a Meal

Deletes an existing meal from the database.

Request
DELETE /api/meals/:id

After successful deletion, the meal is removed from MongoDB and the frontend is updated.

#   Database

MealMate-CRUD uses MongoDB Atlas for data storage.

Mongoose is used as the Object Data Modeling (ODM) library between the Node.js application and MongoDB.

A typical meal document looks like:

{
  "_id": "MongoDB generated ID",
  "name": "Jollof Rice",
  "slug": "jollof-rice",
  "description": "Nigerian rice dish",
  "price": 3500,
  "category": "Nigerian",
  "createdAt": "Date",
  "updatedAt": "Date"
}

MongoDB allows the application to persist meal information even after the server or browser is restarted.

#   CRUD Application Flow
Create
User enters meal information
          ↓
React form
          ↓
Axios POST request
          ↓
POST /api/meals
          ↓
Express controller
          ↓
Mongoose
          ↓
MongoDB
          ↓
Success response
          ↓
React updates meal list
Read
React application
       ↓
Axios GET request
       ↓
GET /api/meals
       ↓
Express
       ↓
MongoDB
       ↓
Meal data returned
       ↓
React displays meals
Update
User selects Edit
       ↓
React loads meal data
       ↓
User changes information
       ↓
Axios PATCH request
       ↓
PATCH /api/meals/:id
       ↓
Express
       ↓
MongoDB
       ↓
Updated meal returned
       ↓
React updates interface
Delete
User selects Delete
       ↓
Axios DELETE request
       ↓
DELETE /api/meals/:id
       ↓
Express
       ↓
MongoDB
       ↓
Meal deleted
       ↓
React refreshes meal list

#   Local Setup

Follow the instructions below to run the application locally.

1. Clone the Repository
git clone https://github.com/benbash/Codveda-Internship

Navigate into the project:

cd MealMate-CRUD
🖥️ Backend Setup
2. Navigate to the Backend
cd backend
3. Install Dependencies
npm install
4. Configure Environment Variables

Create a .env file inside the backend folder.

MONGO_URI=your_mongodb_connection_string
PORT=3000

Replace:

your_mongodb_connection_string

with your MongoDB Atlas connection string.

Example:

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mealmate
PORT=3000

Important: Never commit your actual .env file or database credentials to GitHub.

5. Start the Backend

Run:

npm run dev

The API will run on:

http://localhost:3000

Base API URL:

http://localhost:3000/api

#   Frontend Setup
6. Open a New Terminal

From the project root:

cd frontend
7. Install Dependencies
npm install
8. Start the Frontend
npm run dev

The React application will normally run on:

http://localhost:5173
Running Both Applications

The backend and frontend must both be running.

Terminal 1 — Backend
cd backend
npm run dev

Backend:

http://localhost:3000
Terminal 2 — Frontend
cd frontend
npm run dev

Frontend:

http://localhost:5173

The frontend communicates with the backend through:

http://localhost:3000/api/meals

#   API Testing

The REST API was tested using Postman.

The following operations were tested:

Create
POST /api/meals

Creates a new meal.

Read All
GET /api/meals

Retrieves all meals.

Read One
GET /api/meals/:id

Retrieves a specific meal.

Update
PATCH /api/meals/:id

Updates an existing meal.

Delete
DELETE /api/meals/:id

Deletes an existing meal.

#   Example CRUD Test

A sample meal used during testing was:

Meal Name: Jollof Rice
Description: Nigerian rice dish
Price: ₦3,500
Category: Nigerian
Create
POST /api/meals

Result:

Meal successfully created
Read
GET /api/meals

Result:

Jollof Rice displayed in the meal list
Update

The meal was updated with new information using:

PATCH /api/meals/:id
Delete

The meal was removed using:

DELETE /api/meals/:id

This confirms that all four core CRUD operations work as expected.

#   Responsive Design

The frontend was designed to provide a usable experience across different screen sizes.

The application supports:

Desktop computers
Laptops
Tablets
Mobile devices

Responsive CSS techniques are used to adapt the layout, forms, buttons, and meal cards to different screen sizes.

Environment Variables

The backend requires:

MONGO_URI=your_mongodb_connection_string
PORT=3000

A .env.example file is included in the repository to show the required environment variables.

The actual .env file is excluded from Git tracking.

Example .env.example:

MONGO_URI=your_mongodb_connection_string
PORT=3000
Files Not Included in the Submission

Generated dependencies and sensitive configuration files should not be submitted.

The node_modules directory can be recreated by running:

npm install

The .env file must be created locally using the .env.example file as a guide.

#   CRUD Operations Summary
Operation	HTTP Method	Endpoint	Description	Status
Create	POST	/api/meals	Creates a new meal	
Read All	GET	/api/meals	Retrieves all meals	
Read One	GET	/api/meals/:id	Retrieves one meal	
Update	PATCH	/api/meals/:id	Updates a meal	
Delete	DELETE	/api/meals/:id	Deletes a meal	

#   Separation of Responsibilities

The application follows a simple separation of concerns.

Frontend
   │
   └── User Interface
        ↓
      Axios
        ↓
Backend
   │
   ├── Routes
   │     ↓
   ├── Controllers
   │     ↓
   └── Models
         ↓
      MongoDB
Routes

Responsible for defining API endpoints.

Controllers

Responsible for handling application logic and API responses.

Models

Responsible for defining the database structure.

Database Configuration

Responsible for establishing the MongoDB connection.

This structure makes the application easier to understand, maintain, and expand.

#   Error Handling

The backend provides responses for common API errors.

Examples include:

Meal not found
Invalid MongoDB ID
Invalid request data
Database errors
Failed API requests

A typical error response follows this structure:

{
  "success": false,
  "message": "Failed to create meal",
  "error": "Error description"
}

The frontend also handles failed API requests and provides feedback when an operation cannot be completed.

#   Learning Objectives

This project provided practical experience with:

Building a REST API using Express.js
Implementing CRUD operations
Creating MongoDB schemas using Mongoose
Connecting Node.js to MongoDB Atlas
Building a React frontend
Connecting React to an Express backend
Making HTTP requests using Axios
Managing React state
Handling form submissions
Updating and deleting database records
Handling API errors
Using environment variables
Structuring a full-stack application
Testing APIs with Postman
Using Git and GitHub
Developing responsive web interfaces

#   Purpose

The primary purpose of MealMate-CRUD is to demonstrate the ability to build a functional full-stack CRUD application.

The project demonstrates how:

React
  +
Axios
  +
Express
  +
Mongoose
  +
MongoDB

can work together to create a complete web application.

It also demonstrates practical understanding of the relationship between a frontend application, REST API, backend server, and database.

#   Future Improvements

The following features could be implemented in future versions of MealMate:

User authentication
User accounts
Meal search and filtering
Advanced meal categories
Meal image uploads
Favourite meals
Shopping cart
Payment integration
Admin dashboard
Production deployment

These features are outside the scope of the current CRUD assignment.


#   Acknowledgements

This project was developed as part of a practical full-stack web development task as an Intern at Codveda Technologies and my continuous learning journey in software development.

The project provided an opportunity to apply concepts including:

REST API development
CRUD operations
React
Express.js
MongoDB
Mongoose
Axios
Frontend-backend integration
Responsive web development

#   License

This project is created for educational and portfolio purposes.
