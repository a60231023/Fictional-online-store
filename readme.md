## Fictional online store

### Table of contents:

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Packages used](#packages-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Endpoints](#endpoints)
  - [User and Admin Routes](#user-and-admin-routes)
  - [Product Routes](#product-routes)
  - [Order Routes](#order-routes)
- [Schema](#schema)
  - [User Schema](#user-schema)
  - [Product Schema](#product-schema)
  - [Order Schema](#order-schema)

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

# Folder Structure

| Folder/File   | Description                                                |
|----------------|------------------------------------------------------------|
| config         | Contains configuration files such as database configuration |
| controllers    | Contains modules that handle HTTP requests and responses    |
| middlewares    | Contains modules that add additional functionality to requests and responses |
| models         | Contains modules that represent the schema of different entities |
| node_modules   | Contains installed npm packages and their dependencies      |
| routes         | Contains modules that define the application routes         |
| utils          | Contains utility functions used across the application      |
| .env           | Contains environment variables used for application configuration |
| app.js         | declaring all the middlewares and register the routes for incoming request                              |
| index.js       | Runs the application and listens for incoming requests, Entry point of the application       |

The table above provides a brief description of each item in the folder structure.

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

# Schema 

## User Schema

| Attribute     | Data Type       | Required | Description                                                          |
|---------------|----------------|----------|----------------------------------------------------------------------|
| name          | String         | Yes      | User's name.                                                         |
| email         | String         | Yes      | User's email address. Must be a valid email address and unique.       |
| password      | String         | Yes      | User's password. Must be at least 6 characters long.                  |
| role          | String         | No       | User's role. Default value is 'user'.                                 |
| cart          | Array of Object | No       | Array of product objects that user has added to their cart.            |
| forgotPasswordToken | String | No | Token generated when user forgets their password. |
| forgotPasswordExpiry | Date | No | Expiration date/time of the forgot password token. |
| createdAt     | Date           | No       | Date and time when the user object was created.                        |

## Product Schema

| Attribute | Type | Required | Default | Description |
| --------- | ---- | -------- | ------- | ----------- |
| name | String | Yes | - | The name of the product |
| price | Number | Yes | - | The price of the product |
| description | String | Yes | - | The description of the product |
| photos | Array | No | - | An array of objects containing the id and secure_url of the photos of the product |
| category | String | Yes | - | The category of the product |
| brand | String | Yes | - | The brand of the product |
| ratings | Number | No | 0 | The rating of the product |
| numberOfReviews | Number | No | 0 | The number of reviews of the product |
| reviews | Array | No | - | An array of objects containing the user who reviewed the product, their name, rating, and comment |
| user | ObjectId | Yes | - | The user who created the product |
| createdAt | Date | No | Date.now | The date the product was created |

## Order Schema

| Field         | Type                           | Required | Description                                             |
|---------------|--------------------------------|----------|---------------------------------------------------------|
| shippingInfo  | Object                         | Yes      | Information about the shipping address and contact info |
| shippingInfo.address | String            | Yes      | Shipping address                                         |
| shippingInfo.phoneNumber | Number     | Yes      | Phone number for contact regarding shipping             |
| shippingInfo.city | String            | Yes      | City where the shipping address is located              |
| shippingInfo.state | String           | Yes      | State or province where the shipping address is located |
| shippingInfo.country | String         | Yes      | Country where the shipping address is located           |
| shippingInfo.postalCode | Number     | Yes      | Postal or zip code for the shipping address             |
| user          | ObjectId (refers to User)    | Yes      | User who placed the order                                |
| products      | Array of product objects      | Yes      | List of products and their quantities and prices        |
| products.product | ObjectId (refers to Product) | Yes      | Product being ordered                                    |
| products.quantity | Number             | Yes      | Quantity of the product being ordered                    |
| products.price | Number               | Yes      | Price of the product being ordered                        |
| totalAmount   | Number                         | Yes      | Total cost of the order                                  |
| status        | String                         | No       | Current status of the order (placed, shipped, delivered) |
| createdAt     | Date                           | No       | Date and time when the order was created                 |