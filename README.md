# Forecast-Finder

This program is a simple weather tracking tool that allows users to check the weather of a specific location. The app fetches data from the OpenWeather API and displays key weather details like temperature, humidity, and wind speed. The app is built with a Node.js backend, serving data and static files, while the frontend is developed using HTML, CSS, and JavaScript.

## Features

- **Search Weather**: Enter a city name to check the current weather details such as temperature, humidity, and wind speed.
- **Weather Icons**: Displays different weather icons based on the weather condition (e.g., sunny, rainy, cloudy).
- **Error Handling**: Handles cases where the city is not found and shows a corresponding error message.
- **Dynamic Updates**: Updates the weather details and icons based on the location entered.
- **Persistent API Configuration**: Fetches API credentials and URL from the backend using environment variables.

## Installation

To run the weather app on your local machine, follow these steps:

### Prerequisites

- Node.js (version 20 or higher)
- npm (Node package manager)

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/Forecast-Finder.git
```
```bash
cd Forecast-Finder
```

### Step 2: Install dependencies

Run the following command to install the necessary packages:

```bash
npm install
```

### Step 3: Set up the environment variables

Create a .env file in the root of the project directory and add your OpenWeather API key and URL.

### Step 4: Run the server

After installing dependencies and setting up the .env file, start the Node.js server with:

```bash
npm start
```

This will start the server on port 5000 and open the weather app in your default web browser.

### Step 5: Search for a city

Enter the name of any city to get the current weather information, including temperature, humidity, wind speed, and a weather icon corresponding to the weather condition.

File Format
-----------

### .env file

*   **API\_KEY**: Your OpenWeather API key.
    
*   **API\_URL**: The base URL for the OpenWeather API.
    

### Public Directory

*   **index.html**: Main HTML file displaying the app interface.
    
*   **styles.css**: Styles for the app's layout and design.
    
*   **script.js**: Handles fetching weather data from the backend and updating the UI.
    
*   **images/**: Folder containing weather icons for different conditions.
    

Example Workflow
----------------

1.  Start the server by running npm start.
    
2.  Enter a city name in the search box (e.g., "London").
    
3.  The app fetches weather data and displays the temperature, humidity, wind speed, and an icon based on the weather condition.
    
4.  If the city is not found, an error message is displayed.
    
5.  Close the app by stopping the server (Ctrl + C).
    

Future Enhancements
-------------------

*   Add support for multiple cities and compare weather data.
    
*   Integrate additional weather information, such as 7-day forecasts.
    
*   Implement a graphical user interface (GUI) for easier use.
    
*   Allow users to save their favorite cities for quick access.
