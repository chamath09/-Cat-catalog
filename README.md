# Cat Catalog

A React-based web application that displays a list of cat breeds and their details using data fetched from The Cat API. This project includes a home screen with a clickable list of cat breeds and a detail screen showing information about each selected breed, such as its name, origin, life span, description, and an image.

## Features
   1. Home Screen: Displays a list of cat breed names fetched from The Cat API. Clicking a breed navigates to its detail screen.
   2. Cat Breed Detail Screen: Shows the selected breed's name, origin, life span, description, and an image.
   3. API Integration: Uses The Cat API to fetch breed data dynamically.
   4. Optional Features (if implemented): Search functionality on the home screen to filter breeds.

## Prerequisites

   Before running the project, ensure you have the following installed:

   Node.js (v14.x or higher recommended)
   npm (comes with Node.js) or yarn (optional)
   A free API key from The Cat API (sign up to generate one)
   Setup Instructions
   Follow these steps to set up and run the project locally:
   
**Clone the Repository**

      	```bash
         git clone https://github.com/your-username/cat-catalog.git
         cd cat-catalog

**Install Dependencies** 

   Using npm
     
      ```bash
      npm install
      
   Or using yarn:

      ```bash
      yarn install
      
**Configure the API Key***
Create a .env file in the root directory of the project.
Add your Cat API key to the .env file:

      ```bash
      REACT_APP_CAT_API_KEY=your-api-key-here
      
The application uses this environment variable to fetch data from https://api.thecatapi.com/v1/breeds?limit=20.

**Run the Application Start the development server** 

   Using npm:
   
      ```bash
      npm start
      
   Or using yarn:

      ```bash
      yarn start
      
The app will launch in your default browser at http://localhost:3000.

**Build for Production (optional) To create a production-ready build**
   
      ```bash
      npm run build
      
   Or
      
      ```bash
      yarn build
      
## Project Structure

cat-catalog/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── HomeScreen.js       # Home screen with breed list
│   │   ├── BreedDetail.js      # Detail screen for selected breed
│   │   └── ...
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point
│   └── ...
├── .env                        # Environment variables (API key)
├── package.json                # Dependencies and scripts
└── README.md                   # This file

## API Usage
   This project fetches data from The Cat API. The primary endpoint used is:

      ```bash
      GET https://api.thecatapi.com/v1/breeds?limit=20
      
   Refer to the API documentation for more details.


## Optional Features

   1. Search Functionality: If implemented, allows filtering the breed list on the home screen by name.
   2. Enhanced UX: Smooth transitions, loading states, or error handling may be included.

## Troubleshooting
   If the app doesn’t load data, verify your API key is correctly set in the .env file and that you have an active internet connection.
   Check the console in your browser’s developer tools for any error messages.