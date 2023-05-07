## Fictional online store

<br>

### Table of contents:

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Packages used](#packages-used)
- [Installation](#installation)
- [Endpoints](#endpoints)
  - [User and Admin Routes](#user-and-admin-routes)

<br>

# Introduction

The task is to build a REST API for a fictional online store that sells
electronic products. The API should allow users to perform the following actions:
- Create, Read, Update, and Delete products.
- Search for products by name, description, and category.
- Add products to a shopping cart and place orders.
- Register and authenticate users.

<br>

# Requirements

- NodeJs
- MongoDB (online or locally installed)
- Postman (alternatives can be used)
- Any code editor

<br>

# Packages used

- **bcryptjs** : Library for hashing passwords.
- **cloudinary** : Cloud-based image and video management service.
- **cookie-parser** : Middleware to parse cookies in requests.
- **dotenv** : Loads environment variables from a .env file into process.env.
- **express** : Web application framework for Node.js.
- **express-fileupload** : Middleware for handling file uploads in Express.
- **jsonwebtoken** : Library for generating and verifying JSON web tokens.
- **mongoose** : Object modeling tool for MongoDB.
- **morgan** : HTTP request logger middleware for Node.js.
- **nodemailer** : Library for sending emails.
- **razorpay** : Payment gateway integration library.
- **validator** : Library for data validation and sanitization.
- **nodemon**(dev dependency) : Utility that monitors changes in your source and automatically restarts your server.

<br>

# Installation

1. Clone the repository:

```bash
git clone https://github.com/a60231023/Fictional-online-store.git
```
2. Install dependencies:
```bash
cd Fictional-online-store
npm install
```

3. Create a .env file and configure your environment variables:
```bash
PORT
DB_URL
JWT_SECRET
JWT_EXPIRY

//cloudinary
CLOUD_NAME
API_KEY
SECRET_KEY

//mail config
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
SOURCE_EMAIL     
```

4. Start the server:
```bash
//using node
npm run start

//using nodemon
npm run dev
```

<br>

# Endpoints

## User and Admin Routes

<br>

| Route                  | Method | Description                                                                                                                         |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| /signup                | POST   | Handles user registration                                                                                                           |
| /login                 | POST   | Handles user authentication                                                                                                         |
| /logout                | GET    | Handles user logout                                                                                                                 |
| /forgotPassword        | POST   | Handles sending a password reset email to a user                                                                                    |
| /password/reset/:token | POST   | Handles the password reset process                                                                                                  |
| /userdashboard         | GET    | Returns the details of the currently logged-in user                                                                                 |
| /password/update       | POST   | Handles the process of changing a user's password                                                                                    |
| /userdashboard/update  | POST   | Handles the process of updating a user's profile information                                                                         |
| /addToCart             | POST   | Handles the process of adding a product to the user's shopping cart                                                                  |
| /admin/users           | GET    | Returns a list of all users in the system. Only administrators can access this route                                               |
| /admin/user/:id        | GET    | Returns the details of a specific user. Only administrators can access this route                                                  |
| /admin/user/:id        | PUT    | Handles the process of updating a user's profile information. Only administrators can access this route                             |
| /admin/user/:id        | DELETE | Handles the process of deleting a user's account. Only administrators can access this route                                        |



