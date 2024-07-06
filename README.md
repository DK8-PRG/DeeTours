# DeeTours API

Welcome to the DeeTours API! This project is a full-stack web application for managing and booking tours, built with Node.js, Express, and MongoDB.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Tours](#tours)
  - [Reviews](#reviews)
  - [Users](#users)
  - [Authorization](#authorization)
  - [Bookings](#bookings)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

DeeTours is a comprehensive tour management platform that allows users to browse and book tours, while administrators can manage tours, bookings, and user information. This project is designed to showcase modern back-end development using Node.js and related technologies.

### Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Stripe](https://stripe.com/)

## Features

- Full CRUD functionality for tours, bookings, and users
- RESTful API design
- User authentication and authorization with JWT
- Data validation and error handling
- File uploads and image processing
- Secure payments with Stripe
- Deployment ready with Heroku

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB database (local or cloud-based like MongoDB Atlas)
- Git installed on your machine

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DK8-PRG/DeeTours.git

2. **Navigate to the project directory:**
   ```bash
   cd DeeTours

3. **Install the necessary dependencies:**

   ```bash
   npm install

4. **Create a .env file in the root directory and add the following variables:**

     ```plaintext
    Copy code
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90
  Replace your_mongodb_connection_string with your actual MongoDB connection string, and your_jwt_secret with a secure JWT secret.

5. **Start the development server:**

    ```bash
    npm run dev


## Usage

### API Endpoints

#### Tours

**Get All Tours**

- **Endpoint:** `GET /api/v1/tours`
- **Description:** Retrieve a list of all available tours.

**Get Tour by ID**

- **Endpoint:** `GET /api/v1/tours/:id`
- **Description:** Retrieve details of a specific tour by its ID.

**Create New Tour**

- **Endpoint:** `POST /api/v1/tours`
- **Description:** Create a new tour.

**Update Tour**

- **Endpoint:** `PATCH /api/v1/tours/:id`
- **Description:** Update details of an existing tour by its ID.

**Delete Tour**

- **Endpoint:** `DELETE /api/v1/tours/:id`
- **Description:** Delete a specific tour by its ID.

**Get Top 5 Cheap Tours**

- **Endpoint:** `GET /api/v1/tours/top-5-cheap`
- **Description:** Retrieve the top 5 cheapest tours.

**Get Monthly Plan**

- **Endpoint:** `GET /api/v1/tours/monthly-plan`
- **Description:** Retrieve the monthly plan for tours.

**Get Tour Statistics**

- **Endpoint:** `GET /api/v1/tours/statistics`
- **Description:** Retrieve statistical data for tours.

**Get Tours Within Radius**

- **Endpoint:** `GET /api/v1/tours/within/:distance/center/:latlng/unit/:unit`
- **Description:** Retrieve tours within a specified radius from a given point.

**Get Distances to Tour from Point**

- **Endpoint:** `GET /api/v1/tours/distances/:latlng/unit/:unit`
- **Description:** Calculate distances to tours from a specified point.

#### Reviews

**Get All Reviews**

- **Endpoint:** `GET /api/v1/reviews`
- **Description:** Retrieve all reviews.

**Get Review by ID**

- **Endpoint:** `GET /api/v1/reviews/:id`
- **Description:** Retrieve a specific review by its ID.

**Create Review**

- **Endpoint:** `POST /api/v1/reviews`
- **Description:** Create a new review.

**Update Review**

- **Endpoint:** `PATCH /api/v1/reviews/:id`
- **Description:** Update details of an existing review by its ID.

**Delete Review**

- **Endpoint:** `DELETE /api/v1/reviews/:id`
- **Description:** Delete a specific review by its ID.

**Create New Review for Tour**

- **Endpoint:** `POST /api/v1/tours/:tourId/reviews`
- **Description:** Create a new review for a specific tour.

**Get Tour Reviews**

- **Endpoint:** `GET /api/v1/tours/:tourId/reviews`
- **Description:** Retrieve all reviews for a specific tour.

#### Users

**Get All Users**

- **Endpoint:** `GET /api/v1/users`
- **Description:** Retrieve a list of all users.

**Get User by ID**

- **Endpoint:** `GET /api/v1/users/:id`
- **Description:** Retrieve details of a specific user by their ID.

**Update User**

- **Endpoint:** `PATCH /api/v1/users/:id`
- **Description:** Update details of an existing user by their ID.

**Delete User**

- **Endpoint:** `DELETE /api/v1/users/:id`
- **Description:** Delete a specific user by their ID.

**Get Current User**

- **Endpoint:** `GET /api/v1/users/me`
- **Description:** Retrieve details of the currently authenticated user.

**Update Current User**

- **Endpoint:** `PATCH /api/v1/users/me`
- **Description:** Update details of the currently authenticated user.

**Delete Current User**

- **Endpoint:** `DELETE /api/v1/users/me`
- **Description:** Delete the currently authenticated user.

#### Authorization

**Sign Up**

- **Endpoint:** `POST /api/v1/users/signup`
- **Description:** Create a new user account.

**Login**

- **Endpoint:** `POST /api/v1/users/login`
- **Description:** Authenticate a user and retrieve a token.

**Forgot Password**

- **Endpoint:** `POST /api/v1/users/forgotPassword`
- **Description:** Request a password reset.

**Reset Password**

- **Endpoint:** `PATCH /api/v1/users/resetPassword/:token`
- **Description:** Reset a user's password using a token.

**Update Password**

- **Endpoint:** `PATCH /api/v1/users/updateMyPassword`
- **Description:** Update the password of the currently authenticated user.

#### Bookings

**Get All Bookings**

- **Endpoint:** `GET /api/v1/bookings`
- **Description:** Retrieve all bookings.

**Get Booking by ID**

- **Endpoint:** `GET /api/v1/bookings/:id`
- **Description:** Retrieve details of a specific booking by its ID.

**Create Booking**

- **Endpoint:** `POST /api/v1/bookings`
- **Description:** Create a new booking.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Duong K. Hoang - [duongk.hoang@gmail.com](mailto:duongk.hoang@gmail.com)

Project Link: [https://github.com/DK8-PRG/DeeTours](https://github.com/DK8-PRG/DeeTours)

