# Mobiefy 🛵

## Challenge Description
This project is a mobile application developed in React Native, aimed at providing a comprehensive solution for urban mobility. The [Mobify](https://mobiefy.netlify.app) app integrates multimodal routes, allowing users to combine various modes of transportation available in the cities. Users have the flexibility to adjust their routes according to their mobility needs, including options adapted for individuals with reduced mobility.

Accessibility is a priority for us, and Mobify has been designed to be accessible to everyone. The app includes features that facilitate the daily lives of individuals with reduced mobility, ensuring an inclusive user experience.

By using Mobify, users have access to detailed information about routes and vehicle availability through an intuitive interface. This eliminates the need for multiple apps to plan routes, centralizing all information in a single location.

## Features ✨
Features already available in the software:

**Welcome Screen**: it's possible to view basic information about the application.

**Registration screen**: where it's possible to create a new user's registration.

**Login screen**: where it's possible to provide the email and password to access the application.

 ## Pre Requirements ‼️

- It is necessary install [Npm](https://docs.npmjs.com/cli/v7/commands/npm-install)
- This project use Node[https://nodejs.org/en] version 21.1.0

## How to Install ⚙️

To install the app, follow the step-by-step:

1. Clone the repository on your computer
  ```
    git clone <repository_url>
  ```

 2. Access the directory where you downloaded this project and run the command below to *install dependencies*
  ```
    npm install or npm i
  ```

 3. Ensure that you have all the required Android libraries:
  ```
    cd android
    ./gradlew installDebug
  ```

Important: even thought React Native is hybrid, this app is only configured to work on Android devices.

## Firebase Configuration
This project uses Firebase to handle sign-up and sign-in processes. Before you configure Firebase in your project, you need to set up a Firebase project and obtain your Firebase credentials. You can simply follow the steps on [Firebase Console](https://console.firebase.google.com/u/0/).

Once that is done:


1. Create a file named .env to store your Firebase configuration securely in the root directory of your project.

2. Open the .env file and add the configuration details you obtained from Firebase. Add all the values with your Firebase project credentials:
```
   API_KEY=
   AUTH_DOMAIN=
   PROJECT_ID=
   STORAGE_BUCKET=
   MESSAGING_SENDER_ID=
   APP_ID=
```
Alternatively, you can rename the ``.example.env`` to ``.env`` and file and fill out the variables.

## How to Run 🕹

To run the project simply:
```
% npx react-native run-android
```


 ## Design and Prototyping 🎨

 Figma was chosen as the central tool in the challenge due to its real-time collaboration capabilities and intuitive interface for agile design and prototyping. Please access our [webpage](https://mobiefy.netlify.app) and to view the website's creation, visit the [prototype](https://www.figma.com/design/n4hhArWESLm3vTZpY10ghZ/Mobiefy-Website?node-id=2-12&t=iKvbs7Mn3RaXxEbZ-1).


 ## Fun Facts ⭐

 This challenge was developed as part of an orientation program at the [FIAP](https://www.fiap.com.br) in collaboration with [ManageEngine](https://www.manageengine.com).

 ## License
 MIT © [Beatriz Nonato](https://www.linkedin.com/in/beatriznonato/) 👩🏻‍💻 and [Larissa Soares](https://www.linkedin.com/in/larissacsoares/) 👩🏼‍💻
