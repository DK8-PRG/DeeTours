# DeeTours API

Welcome to the DeeTours API! This project is a full-stack web application for managing and booking tours, built with Node.js, Express, and MongoDB.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

DeeTours is a comprehensive tour management platform that allows users to browse and book tours, while administrators can manage tours, bookings, and user information. This project is designed to showcase modern back-end development using Node.js and related technologies.

## Features

- Full CRUD functionality for tours, bookings, and users
- RESTful API design
- User authentication and authorization
- Data validation and error handling
- File uploads and image processing
- Secure payments with Stripe
- Deployment ready

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB database (local or cloud-based like MongoDB Atlas)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/DK8-PRG/DeeTours.git

2. Navigate to the project directory:
   ```bash
   cd DeeTours

3. Install the necessary dependencies:

   ```bash
   npm install

4. Create a .env file in the root directory and add the following variables:

     ```plaintext
    Copy code
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90
  Replace your_mongodb_connection_string with your actual MongoDB connection string, and your_jwt_secret with a secure JWT secret.

5. Start the development server:

    ```bash
    npm run dev
  The server will start on http://localhost:5000.

Usage
  API Endpoints
    The DeeTours API provides various endpoints to manage tours, bookings, and users. Here are some examples:
  
    Get All Tours: GET /api/v1/tours
    Get Tour by ID: GET /api/v1/tours/:id
    Create a Tour: POST /api/v1/tours
    Update a Tour: PATCH /api/v1/tours/:id
    Delete a Tour: DELETE /api/v1/tours/:id
  For a complete list of endpoints and their usage, please refer to the API Documentation section.
  
  Authentication
    All protected routes require an authentication token. You can obtain a token by logging in:
  
      Login: POST /api/v1/users/login
  Include the token in the Authorization header for protected routes:
  
      plaintext
      Authorization: Bearer YOUR_TOKEN

API Documentation
  For detailed API documentation and usage examples, refer to the Postman Collection.
  
  Contributing
    Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
    
    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request
 
  License
    Distributed under the MIT License. See LICENSE for more information.

Contact
    Kim Hoang Duong - duongk.hoang@gmail.com
  
    Project Link: https://github.com/DK8-PRG/DeeTours
