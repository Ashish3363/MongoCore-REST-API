RESTful API using Node.js, Express & MongoDB (MVC Architecture)
📌 Project Overview

This project is a RESTful API built using Node.js, Express.js, and MongoDB following the Model-View-Controller (MVC) architecture pattern.
It allows users to perform complete CRUD (Create, Read, Update, Delete) operations on MongoDB collections.
The API can be tested using Postman.

🏗️ Tech Stack
Node.js
Express.js (v5)
MongoDB
Mongoose
Nodemon
Postman (for API testing)

📂 Project Structure (MVC Pattern)
MongoCore-REST-API/
│
├── controllers/        # Business logic
├── middleware/         # Custom middleware functions
├── models/             # Mongoose schemas
├── routes/             # API route definitions
├── views/              # View templates (if used)
│
├── connection.js       # MongoDB connection file
├── index.js            # Entry point of the application
├── package.json
├── package-lock.json
└── README.md

🧠 MVC Architecture Explained
🔹 Models
Define the structure of the MongoDB documents using Mongoose Schema.
Handle database interaction logic.

🔹 Controllers
Contain the main business logic.
Handle request and response logic.

🔹 Routes
Define API endpoints.
Connect routes to controller functions.

🔹 Middleware
Used for request validation, logging, authentication, etc.

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/MongoCore-REST-API.git

cd MongoCore-REST-API

2️⃣ Install Dependencies
npm install

3️⃣ Start MongoDB
Make sure MongoDB is running locally.
If using MongoDB locally:
mongod

4️⃣ Run the Application
This project uses nodemon for automatic server restart.
npm start

Your server will start on:
http://localhost:PORT

(Replace PORT with the port defined in index.js.)

📦 package.json
{
  "name": "MongoCore-REST-API",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^5.2.1",
    "mongoose": "^9.1.1",
    "nodemon": "^3.1.11"
  }
}

📌 API Features
✅ Create new data
✅ Read all records
✅ Read single record by ID
✅ Update existing record
✅ Delete record

🔗 Example REST API Endpoints
Method	Endpoint	Description
POST	/api/resource	Create new data
GET	/api/resource	Get all data
GET	/api/resource/:id	Get single data
PUT	/api/resource/:id	Update data
DELETE	/api/resource/:id	Delete data

(Modify endpoint names based on your actual routes.)

🧪 Testing with Postman
Open Postman
Select HTTP Method (GET, POST, PUT, DELETE)
Enter API URL
Add JSON body (for POST/PUT)
Click Send

Example JSON body:

{
  "name": "John Doe",
  "email": "john@example.com"
}

🔌 MongoDB Connection
The connection.js file handles MongoDB connection using Mongoose.
Example:
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

🔄 How the Request Flow Works
Client (Postman)
  ↓
Routes
  ↓
Controllers
  ↓
Models
  ↓
MongoDB

🛠️ Future Improvements
Add authentication (JWT)
Add input validation middleware
Implement error handling middleware
Add environment variables using dotenv
Deploy on Render / Railway / AWS

📖 Learning Outcomes
Implemented MVC architecture
Built RESTful APIs
Connected Node.js with MongoDB
Used Mongoose for schema modeling
Tested APIs using Postman
Used Nodemon for development workflow
