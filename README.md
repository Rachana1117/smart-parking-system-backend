# Node.js MySQL REST API

A REST API built with Node.js and MySQL for creating, reading, updating and deleting data.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file with the following variables:
    - `DB_HOST`
    - `DB_USER`
    - `DB_PASSWORD`
    - `DB_NAME`
6. Run `npm start` to start the server

## Endpoints

### Users

* `GET /users` - Get all users
* `GET /users/:id` - Get a user by id
* `POST /users` - Create a new user
* `PUT /users/:id` - Update a user
* `DELETE /users/:id` - Delete a user

### Malls

* `GET /malls` - Get all malls
* `GET /malls/:id` - Get a mall by id
* `POST /malls` - Create a new mall
* `PUT /malls/:id` - Update a mall
* `DELETE /malls/:id` - Delete a mall

### Slots

* `GET /slots` - Get all slots
* `GET /slots/:id` - Get a slot by id
* `POST /slots` - Create a new slot
* `PUT /slots/:id` - Update a slot
* `DELETE /slots/:id` - Delete a slot

### Bookings

* `GET /bookings` - Get all bookings
* `GET /bookings/:id` - Get a booking by id
* `POST /bookings` - Create a new booking
* `PUT /bookings/:id` - Update a booking
* `DELETE /bookings/:id` - Delete a booking

## Technologies Used

* Node.js
* Express.js
* MySQL
* Sequelize
* Bcrypt
* Nodemon