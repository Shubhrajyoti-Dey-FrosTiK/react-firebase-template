# React Firebase Template

This project shows how to integrate React with Firebase.

Till now these are integrated in the project :
```
1. FireStore
```

# Getting Started 

1. Open terminal 
2. Then run these commands
3. ```git clone https://github.com/Shubhrajyoti-Dey-FrosTiK/react-firebase-template.git```
4. ```cd react-firebase-template```
5. ```npm i```
6. ```touch .env```

Now open your IDE and go to the `.env` file and paste the Google Firebase credentials here.

Example : 

```.js
REACT_APP_FIREBASE_API_KEY = '...'
REACT_APP_FIREBASE_AUTH_DOMAIN = '...'
REACT_APP_FIREBASE_PROJECT_ID = '...'
REACT_APP_FIREBASE_STORAGE_BUCKET = '...'
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = '...'
REACT_APP_FIREBASE_APP_ID = '...'
REACT_APP_FIREBASE_MEASUREMENT_ID = '...'
```

Now to start the server run `npm start` in the terminal.

Your React App integrated with firebase is complete. Now start editing the App.js to customize your app.

# Usage

This template contains 2 folders 
1. services
2. constants

`services` folder contains all the firebase functions you will need. 

So import the module to your file where you want firebase.
```
import { FireStoreService } from "<relative_path>";
```

Now initialize the class object 
```
const FS = new FireStoreService();
```

Now access all the functions through the FS object.

Example : 
```.js
  // Add User
  FS.add("users", { userId: "1", name: "SD" });

  // Get all Users ( Here res object is the response )
  Promise.resolve(FS.getAll("users")).then((res) => console.log(res));
```
