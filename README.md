# Meals To Go

Welcome to the Meals To Go App repository! This mobile app allows users to explore and discover restaurants from a specific location. Users can register, log in, search for places, mark favorite restaurants, view restaurant details, explore a map with marked restaurants, and customize their profile settings.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Demo Video](#demo-videos)
4. [Dependencies](#dependencies)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)

## Getting Started

To get started with the Meals To Go App, follow the instructions in this readme. Make sure you have all the necessary dependencies installed.

## Features

### 1. Authentication
- Users can register and log in using Firebase authentication.

### 2. Home Screen
- Displays a list of restaurants from a specific location.
- Features a search bar for users to find restaurants from a particular place.

### 3. Favorite Restaurants
- Users can mark a restaurant as a favorite, and this information is private to each user.

### 4. Bottom Navigation Bar
- Allows users to navigate between different screens efficiently.

### 5. Restaurant Details
- Clicking on a restaurant opens a detailed view with more information about that restaurant.

### 6. Map Screen
- Displays a Google Map with marked restaurant locations.
- Includes a search bar for users to find restaurants on the map.

### 7. Settings Page
- Shows user information.
- Users can take a picture using the camera and set it as their profile picture.
- Provides a logout button for users to log out from the app.

## Demo Videos


https://github.com/ssifu/meals-to-go/assets/63223565/a7c9f693-1b79-4739-b5ce-e7ba14a38f6e




https://github.com/ssifu/meals-to-go/assets/63223565/69f5e6f6-3b74-41eb-85f1-bed897c9f995





## Dependencies

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)

## Setup and Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/ssifu/meals-to-go.git
   ```

2. Install dependencies.
   ```bash
   cd meals-to-go
   npm install
   ```

3. Set up Firebase authentication and configure the Firebase settings in the app.

4. Run the app on an emulator or a physical device.
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

1. Register or log in to the app using Firebase authentication.
2. Explore restaurants on the home screen and use the search bar to find specific places.
3. Mark your favorite restaurants, and the data is stored privately for each user.
4. Navigate between screens using the bottom navigation bar.
5. View detailed information about a restaurant by clicking on it.
6. Explore the map screen to see marked restaurant locations.
7. Customize your profile picture and view user information on the settings page.
8. Log out from the app using the logout button.

## Known Limitations

While the Meals To Go App provides a great user experience, there are some limitations due to external factors:

### Google API Integration
The app currently uses mock data generated from a previous interaction with Google's API for displaying restaurant information. Due to **budget constraints**, full integration with the Google Places API (or any other specific API) has not been implemented.

