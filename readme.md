E-Commerce Marketplace REST API
This project aims to build a REST API for an e-commerce marketplace, allowing buyers and sellers to interact. The system is designed to handle user registration and authentication, catalog creation by sellers, browsing catalogs by buyers, and placing orders.

Technologies Used
Node.js
Express.js
MongoDB

Project Structure
The project is organized into different entities and their corresponding APIs. Here's a brief overview:

Entities:

Users
Catalogs
Products
Orders


APIs:

Auth APIs

POST /api/auth/register: Register a user (accepts username, password, type of user - buyer/seller)
POST /api/auth/login: Log in a previously registered user (retrieve authentication token)

APIs for Buyers
GET /api/buyer/list-of-sellers: Get a list of all sellers
GET /api/buyer/seller-catalog/:seller_id: Get the catalog of a seller by seller_id
POST /api/buyer/create-order/:seller_id: Send a list of items to create an order for the seller with id = seller_id

(## constant seller id and buyer id are used which needs to be replaced according to the api request)
APIs for Sellers
POST /api/seller/create-catalog: Send a list of items to create a catalog for a seller
GET /api/seller/orders: Retrieve the list of orders received by a seller



Setup Instructions
Clone the Repository:
bash
Copy code
Install Dependencies:


Set up database 
Run the Application:
node app.js
