## EZ Assignment - File Sharing System
Overview
EZ Assignment is a file-sharing system that allows users to upload and download files securely. The backend of this project is built using Node.js, Express, and MongoDB. It also integrates email functionality for user registration and authentication.

Features
User Authentication: Sign up and login functionality using JWT.
File Upload/Download: Users can upload and download files.
MongoDB Integration: The backend is connected to MongoDB to store user data and file metadata.
Email Verification: Users are sent a verification email upon registration to verify their email address.
Multer Integration: For handling file uploads.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
File Storage: Multer
Email Service: Nodemailer (for sending verification emails)
Environment Variables: dotenv for environment variable management.
Setup Instructions
Prerequisites
Ensure you have the following installed on your local machine:

Node.js - You can download it from Node.js Official Website
MongoDB Atlas Account - Sign up on MongoDB Atlas
Git - For cloning the repository
Cloning the Repository
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/satyaswarup140/Ez-assignment.git
Installing Dependencies
Navigate to the project folder and run the following command to install the necessary dependencies:

bash
Copy code
npm install
Set Up Environment Variables
Create a .env file in the root directory of the project and add your environment variables. Here’s an example of what your .env file should look like:

plaintext
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/file-sharing-system?retryWrites=true&w=majority
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-email-password
Replace the placeholder values with your actual MongoDB URI and email credentials.

Running the Project
To run the project locally, use the following command:

bash
Copy code
node server.js
Your server will start running on http://localhost:5001.

Access the Application
Open your browser and navigate to http://localhost:5001 to see the application in action.

API Endpoints
POST /signup
Description: User registration endpoint.
Request Body:
json
Copy code
{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
Response:
200 OK: User created successfully, verification email sent.
400 Bad Request: Error in creating user.
POST /login
Description: User login endpoint.
Request Body:
json
Copy code
{
    "email": "john.doe@example.com",
    "password": "password123"
}
Response:
200 OK: Login successful, JWT token generated.
401 Unauthorized: Invalid credentials.
Contributing
If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

Steps for Contribution:
Fork the repository
Clone your fork to your local machine
Create a new branch
Make your changes and commit them
Push your changes to your fork
Create a pull request
License
This project is licensed under the ISC License - see the LICENSE file for details.

Acknowledgements
Node.js, Express: Used for building the backend server.
MongoDB: For data storage.
Multer: For handling file uploads.
Nodemailer: For sending emails.
You can copy and paste this README.md content into your README.md file in the root of your repository.

Let me know if you need further adjustments!
