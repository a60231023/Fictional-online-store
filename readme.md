## Fictional online store

### Table of contents:

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Packages used](#packages-used)
- [Installation](#installation)
- [Endpoints](#endpoints)
  - [User and Admin Routes](#user-and-admin-routes)
  - [Product Routes](#product-routes)
  - [Order Routes](#order-routes)

# Introduction

The task is to build a REST API for a fictional online store that sells
electronic products. The API should allow users to perform the following actions:
- Create, Read, Update, and Delete products.
- Search for products by name, description, and category.
- Add products to a shopping cart and place orders.
- Register and authenticate users.

# Requirements

- NodeJs
- MongoDB (online or locally installed)
- Postman (alternatives can be used)
- Any code editor

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

# Endpoints

## User and Admin Routes

| Route                  | Method | Description                                                                                                                         |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| `/signup`                | POST   | Handles user registration                                                                                                           |
| `/login`                 | POST   | Handles user authentication                                                                                                         |
| `/logout`                | GET    | Handles user logout                                                                                                                 |
| `/forgotPassword`        | POST   | Handles sending a password reset email to a user                                                                                    |
| `/password/reset/:token` | POST   | Handles the password reset process                                                                                                  |
| `/userdashboard`         | GET    | Returns the details of the currently logged-in user                                                                                 |
| `/password/update`       | POST   | Handles the process of changing a user's password                                                                                    |
| `/userdashboard/update`  | POST   | Handles the process of updating a user's profile information                                                                         |
| `/addToCart`             | POST   | Handles the process of adding a product to the user's shopping cart                                                                  |
| `/admin/users`           | GET    | Returns a list of all users in the system. Only administrators can access this route                                               |
| `/admin/user/:id`        | GET    | Returns the details of a specific user. Only administrators can access this route                                                  |
| `/admin/user/:id`        | PUT    | Handles the process of updating a user's profile information. Only administrators can access this route                             |
| `/admin/user/:id`        | DELETE | Handles the process of deleting a user's account. Only administrators can access this route                                        |

## Product Routes

| Route                  | Method | Description                                                                                                           |
|------------------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| `/testProduct`            | GET    | A test route to ensure that the API is functioning correctly.                                                         |
| `/products`               | GET    | Returns a list of all products available in the system.                                                               |
| `/product/:id`            | GET    | Returns the details of a specific product by its ID.                                                                  |
| `/products/search`        | GET    | Returns a list of products that match the search query.                                                               |
| `/admin/product/add`      | POST   | Adds a new product to the system. Only administrators can access this route.                                          |
| `/admin/product/update/:id` | PUT    | Updates the details of a specific product by its ID. Only administrators can access this route.                       |
| `/admin/product/delete/:id` | DELETE | Deletes a specific product by its ID. Only administrators can access this route.                                      |

## Order Routes

| Route | Method | Description |
| --- | --- | --- |
| `/order` | POST | This route creates a new order for the logged-in user. The user must be authenticated to access this route. |
| `/getOrder` | GET | This route returns the details of all orders made by the currently logged-in user. The user must be authenticated to access this route. |
| `/admin/order/:id` | GET | This route returns the details of a specific order by its ID. Only administrators can access this route. |
| `/admin/order` | GET | This route returns a list of all orders made by all users in the system. Only administrators can access this route. |
| `/admin/order/:id` | DELETE | This route deletes a specific order by its ID. Only administrators can access this route. |

